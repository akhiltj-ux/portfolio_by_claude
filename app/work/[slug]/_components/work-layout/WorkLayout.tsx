import type { WorkFrontmatter, Heading } from '@/lib/mdx';
import WorkIntro from '../work-intro/WorkIntro';
import WorkToc from '../work-toc/WorkToc';
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
          <WorkToc headings={headings} />
        </aside>
        <div className={styles.content}>
          <WorkIntro frontmatter={frontmatter} />
          <article className={styles.article}>
            {children}
          </article>
        </div>
      </div>
    </main>
  );
}
