import Link from 'next/link';
import { ProjectInfo } from '@/components/molecules';
import styles from './ProjectCard.module.css';

type ProjectCardProps = {
  image: string;
  title: string;
  tags: string[];
  bgColor: 'peach' | 'mint' | 'lavender';
  imageSide: 'left' | 'right';
  href: string;
};

/**
 * Full-width two-column card: image column + coloured info panel.
 * imageSide controls which column leads. Entire card is a navigable link.
 */
export default function ProjectCard({
  image,
  title,
  tags,
  bgColor,
  imageSide,
  href,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className={`${styles.card}${imageSide === 'right' ? ` ${styles.reverse}` : ''}`}
    >
      <div className={styles.imageCol}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} />
      </div>
      <div
        className={styles.panel}
        style={{ backgroundColor: `var(--color-${bgColor})` }}
      >
        <ProjectInfo title={title} tags={tags} />
      </div>
    </Link>
  );
}
