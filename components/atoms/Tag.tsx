import { ReactNode } from 'react';

type TagProps = {
  children: ReactNode;
};

export default function Tag({ children }: TagProps) {
  return (
    <span className="inline-block font-mono text-[11px] uppercase tracking-[0.05em] border border-current rounded-full px-3 py-1">
      {children}
    </span>
  );
}
