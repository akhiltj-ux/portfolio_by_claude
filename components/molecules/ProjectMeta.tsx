import { Tag } from '@/components/atoms';
import styles from './ProjectMeta.module.css';

type ProjectMetaProps = {
  tags: string[];
};

/** Wraps an array of tag strings into a flex row of Tag atoms. */
export default function ProjectMeta({ tags }: ProjectMetaProps) {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  );
}
