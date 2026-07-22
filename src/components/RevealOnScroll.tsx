import { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // 0, 1, 2, 3, etc. for staggered cascading
}

export const RevealOnScroll = ({ children, className = '', delay = 0 }: RevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Map simple numbers to specific Tailwind delay classes
  const getDelayClass = (d: number) => {
    switch (d) {
      case 1: return 'delay-[100ms]';
      case 2: return 'delay-[200ms]';
      case 3: return 'delay-[300ms]';
      case 4: return 'delay-[400ms]';
      case 5: return 'delay-[500ms]';
      default: return '';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${getDelayClass(delay)} ${className}`}
    >
      {children}
    </div>
  );
};
