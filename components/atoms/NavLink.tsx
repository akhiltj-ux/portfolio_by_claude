import Link from 'next/link';
import { ReactNode } from 'react';

type NavLinkProps = {
  href: string;
  children: ReactNode;
  active?: boolean;
};

export default function NavLink({ href, children, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`font-mono text-[13px] uppercase tracking-[0.05em] no-underline transition-colors ${
        active ? 'text-accent' : 'hover:text-accent'
      }`}
    >
      {children}
    </Link>
  );
}
