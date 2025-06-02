import React, { useRef, useEffect } from 'react';

interface AnimatePresenceProps {
  children: React.ReactNode;
}

export const AnimatePresence: React.FC<AnimatePresenceProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is a simplified version. In a real implementation,
    // you would use a library like Framer Motion or GSAP for more complex animations
    const element = ref.current;
    if (element) {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      
      // Trigger animation
      setTimeout(() => {
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, 100);
    }

    return () => {
      if (element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
      }
    };
  }, [children]);

  return (
    <div ref={ref} className="w-full">
      {children}
    </div>
  );
};