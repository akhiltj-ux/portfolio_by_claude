type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <span
      className={`font-mono text-[14px] uppercase tracking-[0.1em] font-medium${className ? ` ${className}` : ''}`}
    >
      AKHIL T J
    </span>
  );
}
