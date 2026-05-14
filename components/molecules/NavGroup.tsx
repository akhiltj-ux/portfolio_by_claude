import { NavLink } from '@/components/atoms';
import styles from './NavGroup.module.css';

type NavGroupProps = {
  activePath: string;
};

const links = [
  { label: 'HOME', href: '/' },
  { label: 'WORK', href: '/work' },
  { label: 'ABOUT', href: '/about' },
] as const;

/** Primary site navigation rendered as a horizontal row of NavLink atoms. */
export default function NavGroup({ activePath }: NavGroupProps) {
  return (
    <nav className={styles.nav}>
      {links.map(({ label, href }) => (
        <NavLink key={href} href={href} active={activePath === href}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
