import type { ComponentPropsWithoutRef } from 'react';
import styles from './MdxElements.module.css';

export function MdxHeading({ children, ...props }: ComponentPropsWithoutRef<'h2'>) {
  return (
    <h2 {...props} className={styles.heading}>
      {children}
    </h2>
  );
}

export function MdxBody({ children, ...props }: ComponentPropsWithoutRef<'p'>) {
  return (
    <p {...props} className={styles.text}>
      {children}
    </p>
  );
}
