import { Logo, NavLink } from '@/components/atoms';
import { NavGroup } from '@/components/molecules';
import styles from './Header.module.css';

type HeaderProps = {
  activePath: string;
};

/** Sticky top bar: logo left, site nav centre, resume link right. */
export default function Header({ activePath }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Logo />
      <NavGroup activePath={activePath} />
      <NavLink href="/resume">RESUME</NavLink>
    </header>
  );
}
