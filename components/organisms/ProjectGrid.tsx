import { projects } from '@/lib/projects';
import ProjectCard from './ProjectCard';
import styles from './ProjectGrid.module.css';

/** Renders all projects as a flush vertical stack, alternating image side. */
export default function ProjectGrid() {
  return (
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          title={project.title}
          tags={project.tags}
          bgColor={project.bgColor}
          href={project.href}
          imageSide={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  );
}
