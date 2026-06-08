import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import { getWork, getWorkSlugs } from '@/lib/mdx';
import WorkLayout from './_components/work-layout/WorkLayout';
import { mdxComponents } from './_components/mdxComponents';
import { rehypeSectionizeWork } from './_components/rehypeSectionizeWork';

export function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const { frontmatter } = getWork(params.slug);
    return { title: `${frontmatter.title} — Akhil T J` };
  } catch {
    return { title: 'Work — Akhil T J' };
  }
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  let work;
  try {
    work = getWork(params.slug);
  } catch {
    notFound();
  }

  const { frontmatter, content, headings } = work;

  return (
    <WorkLayout frontmatter={frontmatter} headings={headings}>
      <MDXRemote
        source={content}
        components={mdxComponents}
        options={{ mdxOptions: { rehypePlugins: [rehypeSlug, rehypeSectionizeWork] } }}
      />
    </WorkLayout>
  );
}
