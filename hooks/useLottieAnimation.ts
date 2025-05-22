import { useEffect, useRef } from 'react';

interface UseLottieAnimationProps {
  path: string;
}

export function useLottieAnimation({ path }: UseLottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animation: any;
    let isDestroyed = false;
    
    const loadLottie = async () => {
      if (typeof window === 'undefined') return;
      
      try {
        const lottie = (await import('lottie-web')).default;
        if (containerRef.current && !isDestroyed) {
          animation = lottie.loadAnimation({
            container: containerRef.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path,
          });
        }
      } catch (error) {
        console.error("Error loading Lottie animation:", error);
      }
    };

    loadLottie();

    return () => {
      isDestroyed = true;
      if (animation) {
        animation.destroy();
      }
    };
  }, [path]);

  return containerRef;
}