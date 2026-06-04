import { Tag } from '@/components/ui';
import styles from './ProjectMeta.module.css';

type ProjectMetaProps = {
  tags: string[];
};

export default function ProjectMeta({ tags }: ProjectMetaProps) {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <Tag key={tag} label={tag} />
      ))}
    </div>
  );
}
