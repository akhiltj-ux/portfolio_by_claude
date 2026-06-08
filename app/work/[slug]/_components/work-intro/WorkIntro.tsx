import type { WorkFrontmatter } from '@/lib/mdx';
import styles from './WorkIntro.module.css';

type Props = {
  frontmatter: WorkFrontmatter;
};

export default function WorkIntro({ frontmatter }: Props) {
  const { title, role, skills, timeline, team, cover } = frontmatter;
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.meta}>
        <div className={styles.metaStack}>
          <span className={styles.metaLabel}>Role</span>
          <span className={styles.metaValue}>{role}</span>
        </div>
        <div className={styles.metaStack}>
          <span className={styles.metaLabel}>Skills</span>
          {skills.map((s) => (
            <span key={s} className={styles.metaValue}>{s}</span>
          ))}
        </div>
        <div className={styles.metaStack}>
          <span className={styles.metaLabel}>Timeline</span>
          <span className={styles.metaValue}>{timeline}</span>
        </div>
        <div className={styles.metaStack}>
          <span className={styles.metaLabel}>Team</span>
          {team.map((member) => (
            <span key={member} className={styles.metaValue}>{member}</span>
          ))}
        </div>
      </div>
      {cover && (
        <img src={cover} alt={title} className={styles.cover} />
      )}
    </header>
  );
}
