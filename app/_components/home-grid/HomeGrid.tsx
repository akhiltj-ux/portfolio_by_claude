import { getWork, getWorkSlugs } from '@/lib/mdx';
import HomeCard from '../home-card/HomeCard';
import styles from './HomeGrid.module.css';

const bgColors = ['#FFECE5', '#E5FDEB', '#F0E5FF'];

export default function HomeGrid() {
  const featuredWorks = getWorkSlugs()
    .map((slug) => ({ slug, ...getWork(slug) }))
    .filter(({ frontmatter }) => frontmatter.featured)
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);

  return (
    <div id="works" className={styles.grid}>
      {featuredWorks.map(({ slug, frontmatter }, index) => (
        <HomeCard
          key={slug}
          image={frontmatter.cover}
          alt={frontmatter.title}
          title={frontmatter.title}
          tags={frontmatter.skills}
          bgColor={bgColors[index % bgColors.length]}
          href={`/work/${slug}`}
          imageSide={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  );
}
