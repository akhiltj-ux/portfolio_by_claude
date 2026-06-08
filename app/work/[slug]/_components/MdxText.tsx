import type { ComponentPropsWithoutRef } from 'react';
import styles from './MdxText.module.css';

export default function MdxText({ children, ...props }: ComponentPropsWithoutRef<'p'>) {
  return (
    <p {...props} className={styles.text}>
      {children}
    </p>
  );
}
