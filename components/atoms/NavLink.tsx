import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';

type NavLinkProps = {
  href: string;
  children: ReactNode;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export default function NavLink({ href, children, active, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`font-mono text-[13px] uppercase tracking-[0.05em] no-underline transition-colors ${
        active ? 'text-accent' : 'hover:text-accent'
      }`}
    >
      {children}
    </Link>
  );
}
