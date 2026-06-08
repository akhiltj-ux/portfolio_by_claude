import Link from 'next/link';
import HomeCardPills from '../home-card-pills/HomeCardPills';
import styles from './HomeCard.module.css';

type HomeCardProps = {
  image: string;
  alt: string;
  title: string;
  tags: string[];
  bgColor: string;
  imageSide: 'left' | 'right';
  href: string;
};

export default function HomeCard({
  image,
  alt,
  title,
  tags,
  bgColor,
  imageSide,
  href,
}: HomeCardProps) {
  return (
    <Link
      href={href}
      className={`${styles.card}${imageSide === 'right' ? ` ${styles.reverse}` : ''}`}
    >
      <div className={styles.imageCol}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={alt} className={styles.image} />
      </div>
      <div className={styles.panel} style={{ backgroundColor: bgColor }}>
        <HomeCardPills tags={tags} />
        <h3 className={styles.title}>{title}</h3>
      </div>
    </Link>
  );
}
