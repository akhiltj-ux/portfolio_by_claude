'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}>© 2026 AKHIL T J</span>
      <nav className={styles.navLinks}>
        <Link href="#linkedin" className={styles.navLink}>LINKEDIN</Link>
        <Link href="mailto:hello@akhiltj.com" className={styles.navLink}>EMAIL</Link>
        <Link href="/resume" className={styles.navLink}>RESUME</Link>
      </nav>
      <button
        className={styles.goUp}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        GO UP
      </button>
    </footer>
  );
}
