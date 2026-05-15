'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Logo, NavLink } from '@/components/atoms';
import { NavGroup } from '@/components/molecules';
import styles from './Header.module.css';

type HeaderProps = {
  activePath: string;
};

const mobileLinks = [
  { href: '/', label: 'HOME' },
  { href: '/work', label: 'WORK' },
  { href: '/about', label: 'ABOUT' },
  { href: '/resume', label: 'RESUME' },
] as const;

export default function Header({ activePath }: HeaderProps) {
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
          <Logo />
        </Link>

        <div className={styles.desktopNav}>
          <NavGroup activePath={activePath} />
        </div>

        <div className={styles.desktopResume}>
          <NavLink href="/resume">RESUME</NavLink>
        </div>

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
            <div key={href} className={styles.overlayItem}>
              <NavLink href={href} active={activePath === href} onClick={closeMenu}>
                {label}
              </NavLink>
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
