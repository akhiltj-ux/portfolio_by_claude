import { ReactNode } from 'react';

type BodyTextProps = {
  size?: 'sm' | 'base' | 'lg';
  children: ReactNode;
};

const sizeClasses: Record<NonNullable<BodyTextProps['size']>, string> = {
  sm: 'text-[15px]',
  base: 'text-[17px]',
  lg: 'text-[20px]',
};

export default function BodyText({ size = 'base', children }: BodyTextProps) {
  return (
    <p className={`font-serif ${sizeClasses[size]} leading-[1.5]`}>
      {children}
    </p>
  );
}
