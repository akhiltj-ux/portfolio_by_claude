import type { WorkFrontmatter, Heading } from '@/lib/mdx';
import WorkHeader from './WorkHeader';
import TableOfContents from './TableOfContents';
import styles from './WorkLayout.module.css';

type Props = {
  frontmatter: WorkFrontmatter;
  headings: Heading[];
  children: React.ReactNode;
};

export default function WorkLayout({ frontmatter, headings, children }: Props) {
  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <aside className={styles.sidebar}>
          <TableOfContents headings={headings} />
        </aside>
        <div className={styles.content}>
          <WorkHeader frontmatter={frontmatter} />
          <article className={styles.article}>
            {children}
          </article>
        </div>
      </div>
    </main>
  );
}
