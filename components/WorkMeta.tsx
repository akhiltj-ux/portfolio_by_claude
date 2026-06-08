import { Tag } from '@/components/ui';
import styles from './WorkMeta.module.css';

type WorkMetaProps = {
  tags: string[];
};

export default function WorkMeta({ tags }: WorkMetaProps) {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <Tag key={tag} label={tag} />
      ))}
    </div>
  );
}
