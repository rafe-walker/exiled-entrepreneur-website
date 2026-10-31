import type { CSSProperties, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds. */
  delay?: number;
}

/**
 * Fade/slide-in that needs no JavaScript. It is a plain CSS animation (see
 * `.reveal` in globals.css), so server-rendered content is visible even
 * before hydration and in no-JS clients, and it honours prefers-reduced-motion.
 */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const style: CSSProperties | undefined = delay ? { animationDelay: `${delay}s` } : undefined;
  return (
    <div className={`reveal${className ? ` ${className}` : ''}`} style={style}>
      {children}
    </div>
  );
}
