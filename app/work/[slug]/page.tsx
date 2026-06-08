import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import { getWork, getWorkSlugs } from '@/lib/mdx';
import { Header, Footer } from '@/components/sections';
import WorkLayout from '@/components/works/WorkLayout';
import { mdxComponents } from '@/components/works/mdxComponents';

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
    <>
      <Header activePath={`/work/${params.slug}`} />
      <WorkLayout frontmatter={frontmatter} headings={headings}>
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}
        />
      </WorkLayout>
      <Footer />
    </>
  );
}
