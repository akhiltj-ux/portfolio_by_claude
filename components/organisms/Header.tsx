'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
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

/**
 * Sticky site header. Desktop/tablet: inline logo + nav + resume.
 * Mobile: logo + MENU/CLOSE toggle that reveals a fixed overlay nav.
 */
export default function Header({ activePath }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header ref={headerRef} className={styles.header}>
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
      </header>

      {isMenuOpen && (
        <nav className={styles.overlay} style={{ top: headerHeight }}>
          {mobileLinks.map(({ href, label }) => (
            <div key={href} className={styles.overlayItem}>
              <NavLink href={href} active={activePath === href} onClick={closeMenu}>
                {label}
              </NavLink>
            </div>
          ))}
        </nav>
      )}
    </>
  );
}
