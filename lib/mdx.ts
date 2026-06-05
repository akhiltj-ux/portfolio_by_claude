import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const PROJECTS_DIR = path.join(process.cwd(), 'content/projects');

export type ProjectFrontmatter = {
  title: string;
  role: string;
  skills: string[];
  timeline: string;
  team: string[];
  cover: string;
  excerpt: string;
};

export type Heading = {
  level: number;
  text: string;
  id: string;
};

export function getProjectSlugs(): string[] {
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''));
}

export function getProject(slug: string): {
  frontmatter: ProjectFrontmatter;
  content: string;
  headings: Heading[];
} {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return {
    frontmatter: data as ProjectFrontmatter,
    content,
    headings: extractHeadings(content),
  };
}

function extractHeadings(content: string): Heading[] {
  const regex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const text = match[2].trim();
    headings.push({
      level: match[1].length,
      text,
      id: text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''),
    });
  }
  return headings;
}
