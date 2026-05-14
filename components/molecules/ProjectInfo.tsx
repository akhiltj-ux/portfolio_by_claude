import { Heading } from '@/components/atoms';
import ProjectMeta from './ProjectMeta';
import styles from './ProjectInfo.module.css';

type ProjectInfoProps = {
  title: string;
  tags: string[];
};

/** Stacks project tags above a project-variant heading; spacing owned by parent. */
export default function ProjectInfo({ title, tags }: ProjectInfoProps) {
  return (
    <div className={styles.wrapper}>
      <ProjectMeta tags={tags} />
      <Heading variant="project">{title}</Heading>
    </div>
  );
}
