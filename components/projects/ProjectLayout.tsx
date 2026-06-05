import type { ProjectFrontmatter, Heading } from '@/lib/mdx';
import ProjectHeader from './ProjectHeader';
import TableOfContents from './TableOfContents';
import styles from './ProjectLayout.module.css';

type Props = {
  frontmatter: ProjectFrontmatter;
  headings: Heading[];
  children: React.ReactNode;
};

export default function ProjectLayout({ frontmatter, headings, children }: Props) {
  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <aside className={styles.sidebar}>
          <TableOfContents headings={headings} />
        </aside>
        <div className={styles.content}>
          <ProjectHeader frontmatter={frontmatter} />
          <article className={styles.article}>
            {children}
          </article>
        </div>
      </div>
    </main>
  );
}
