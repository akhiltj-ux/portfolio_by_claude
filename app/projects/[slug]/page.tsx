import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import { getProject, getProjectSlugs } from '@/lib/mdx';
import { Header, Footer } from '@/components/sections';
import ProjectLayout from '@/components/projects/ProjectLayout';
import { mdxComponents } from '@/components/projects/mdxComponents';

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const { frontmatter } = getProject(params.slug);
    return { title: `${frontmatter.title} — Akhil T J` };
  } catch {
    return { title: 'Project — Akhil T J' };
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  let project;
  try {
    project = getProject(params.slug);
  } catch {
    notFound();
  }

  const { frontmatter, content, headings } = project;

  return (
    <>
      <Header activePath="/" />
      <ProjectLayout frontmatter={frontmatter} headings={headings}>
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}
        />
      </ProjectLayout>
      <Footer />
    </>
  );
}
