import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const WORKS_DIR = path.join(process.cwd(), 'content/works');

export type WorkFrontmatter = {
  title: string;
  role: string;
  skills: string[];
  timeline: string;
  team: string[];
  cover: string;
};

export type Heading = {
  level: number;
  text: string;
  id: string;
};

export function getWorkSlugs(): string[] {
  return fs
    .readdirSync(WORKS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''));
}

export function getWork(slug: string): {
  frontmatter: WorkFrontmatter;
  content: string;
  headings: Heading[];
} {
  const filePath = path.join(WORKS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return {
    frontmatter: data as WorkFrontmatter,
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
