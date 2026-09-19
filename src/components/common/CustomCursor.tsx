import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    if (!window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let isHovered = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.opacity = '1';

      const target = e.target as HTMLElement | null;
      const isInteractive = Boolean(
        target &&
          (target.tagName === 'BUTTON' ||
            target.tagName === 'A' ||
            target.closest('button') ||
            target.closest('a') ||
            target.getAttribute('role') === 'button')
      );

      if (isInteractive && !isHovered) {
        isHovered = true;
        ring.className =
          'rounded-full border transition-all duration-150 w-9 h-9 border-cyber-cyan bg-cyber-cyan/15 scale-125';
      } else if (!isInteractive && isHovered) {
        isHovered = false;
        ring.className =
          'rounded-full border transition-all duration-150 w-5 h-5 border-cyber-cyan/60 bg-cyber-cyan/5';
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      currentX = mouseX;
      currentY = mouseY;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = 'scale(0.85)';
    };

    const onMouseUp = () => {
      ring.style.transform = '';
    };

    const onMouseLeave = () => {
      cursor.style.opacity = '0';
    };

    const onMouseEnter = () => {
      cursor.style.opacity = '1';
    };

    // GPU-accelerated smooth loop (0 React re-renders, 0 layout reflows)
    const animate = () => {
      currentX += (mouseX - currentX) * 0.45;
      currentY += (mouseY - currentY) * 0.45;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-50 will-change-transform"
      style={{ transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)' }}
      aria-hidden="true"
    >
      <div
        ref={ringRef}
        className="rounded-full border transition-all duration-150 w-5 h-5 border-cyber-cyan/60 bg-cyber-cyan/5"
      />
    </div>
  );
};

