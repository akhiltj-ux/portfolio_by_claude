import { works } from '@/lib/works';
import HomeCard from '../home-card/HomeCard';
import styles from './HomeGrid.module.css';

const bgColors = ['#FFECE5', '#E5FDEB', '#F0E5FF'];

export default function HomeGrid() {
  return (
    <div id="works" className={styles.grid}>
      {works.map((work, index) => (
        <HomeCard
          key={work.id}
          image={work.image}
          alt={work.alt}
          title={work.title}
          tags={work.tags}
          bgColor={bgColors[index % bgColors.length]}
          href={work.href}
          imageSide={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  );
}
