'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const navLinks = [
  { href: '/', label: 'WORK' },
  { href: '/about', label: 'ABOUT' },
  { href: '/contact', label: 'CONTACT' },
] as const;

const mobileLinks = [
  { href: '/', label: 'WORK' },
  { href: '/about', label: 'ABOUT' },
  { href: '/contact', label: 'CONTACT' },
  { href: '/resume', label: 'RESUME' },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) closeMenu();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <Link href="/" className={styles.logoLink}>
          AKHIL T J
        </Link>

        <nav className={styles.desktopNav}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.navLink} ${pathname === href ? styles.active : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/resume" className={styles.resumeLink}>
          RESUME
        </Link>

        <button
          className={styles.menuBtn}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {isMenuOpen && (
        <nav className={styles.overlay}>
          {mobileLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className={`${styles.overlayLink} ${pathname === href ? styles.active : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
