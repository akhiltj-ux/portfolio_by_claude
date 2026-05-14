'use client';

import { NavLink } from '@/components/atoms';
import styles from './FooterLinks.module.css';

/** Footer navigation row: external links, email, resume, and smooth-scroll to top. */
export default function FooterLinks() {
  return (
    <div className={styles.links}>
      <NavLink href="#linkedin">LINKEDIN</NavLink>
      <NavLink href="mailto:hello@akhiltj.com">EMAIL</NavLink>
      <NavLink href="/resume">RESUME</NavLink>
      <NavLink
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        GO UP
      </NavLink>
    </div>
  );
}
