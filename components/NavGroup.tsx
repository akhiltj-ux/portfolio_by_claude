import { NavLink } from '@/components/ui';
import styles from './NavGroup.module.css';

type NavGroupProps = {
  activePath: string;
};

const links = [
  { label: 'WORK', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
] as const;

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
