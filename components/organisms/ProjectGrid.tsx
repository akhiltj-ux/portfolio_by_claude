import { projects } from '@/lib/projects';
import ProjectCard from './ProjectCard';
import styles from './ProjectGrid.module.css';

const bgColors = ['#FFECE5', '#E5FDEB', '#F0E5FF'];

export default function ProjectGrid() {
  return (
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          alt={project.alt}
          title={project.title}
          tags={project.tags}
          bgColor={bgColors[index % bgColors.length]}
          href={project.href}
          imageSide={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  );
}
