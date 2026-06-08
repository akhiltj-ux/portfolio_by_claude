import { works } from '@/lib/works';
import WorkCard from '@/components/WorkCard';
import styles from './WorkGrid.module.css';

const bgColors = ['#FFECE5', '#E5FDEB', '#F0E5FF'];

export default function WorkGrid() {
  return (
    <div id="works" className={styles.grid}>
      {works.map((work, index) => (
        <WorkCard
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
