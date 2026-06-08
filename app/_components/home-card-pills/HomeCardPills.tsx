import { Tag } from '@/components/ui';
import styles from './HomeCardPills.module.css';

type HomeCardPillsProps = {
  tags: string[];
};

export default function HomeCardPills({ tags }: HomeCardPillsProps) {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <Tag key={tag} label={tag} />
      ))}
    </div>
  );
}
