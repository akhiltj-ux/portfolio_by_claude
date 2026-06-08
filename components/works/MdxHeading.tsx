import type { ComponentPropsWithoutRef } from 'react';
import styles from './MdxHeading.module.css';

export default function MdxHeading({ children, ...props }: ComponentPropsWithoutRef<'h2'>) {
  return (
    <h2 {...props} className={styles.heading}>
      {children}
    </h2>
  );
}
