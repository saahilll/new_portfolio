import React, { useRef, useEffect } from 'react';

interface ParallaxContainerProps {
  children: React.ReactNode;
  speed?: number; // A value between 0 and 1, where 0 is no parallax and 1 is full parallax
  className?: string;
}

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  speed = 0.2,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !childRef.current) return;
      
      const scrollTop = window.scrollY;
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      
      // Calculate how much the container is in view
      const viewportHeight = window.innerHeight;
      const containerBottomPosition = containerTop + containerHeight;
      
      // Only apply parallax when the container is in the viewport
      if (
        scrollTop + viewportHeight > containerTop && 
        scrollTop < containerBottomPosition
      ) {
        const distanceFromTop = scrollTop - containerTop;
        const parallaxOffset = distanceFromTop * speed;
        
        // Apply the parallax effect
        childRef.current.style.transform = `translate3d(0, ${parallaxOffset}px, 0)`;
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={childRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
};