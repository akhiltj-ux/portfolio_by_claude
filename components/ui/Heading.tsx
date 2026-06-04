import { ElementType, ReactNode } from 'react';

type HeadingProps = {
  variant: 'display' | 'h1' | 'h2' | 'project';
  italic?: boolean;
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
};

const defaultTags: Record<HeadingProps['variant'], string> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  project: 'h3',
};

const variantClasses: Record<HeadingProps['variant'], string> = {
  display: 'text-[clamp(4rem,8vw,8rem)] leading-[0.95] tracking-[-0.02em]',
  h1: 'text-[clamp(2rem,5vw,4rem)] leading-tight',
  h2: 'text-[clamp(1.5rem,3vw,2.5rem)] leading-snug',
  project: 'text-[clamp(1.25rem,2.5vw,1.75rem)] leading-snug',
};

export default function Heading({ variant, italic, children, as }: HeadingProps) {
  const Tag = (as ?? defaultTags[variant]) as ElementType;

  return (
    <Tag className={`font-serif ${variantClasses[variant]}${italic ? ' italic' : ''}`}>
      {children}
    </Tag>
  );
}
