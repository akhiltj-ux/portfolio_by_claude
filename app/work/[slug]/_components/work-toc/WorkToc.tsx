'use client';

import { useEffect, useState } from 'react';
import type { Heading } from '@/lib/mdx';
import styles from './WorkToc.module.css';

type Props = {
  headings: Heading[];
};

export default function WorkToc({ headings }: Props) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <nav className={styles.toc}>
      <ul className={styles.list}>
        {headings.map(({ id, text, level }) => (
          <li key={id} className={`${styles.item} ${level === 3 ? styles.nested : ''}`}>
            <a
              href={`#${id}`}
              className={`${styles.link} ${activeId === id ? styles.active : ''}`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
