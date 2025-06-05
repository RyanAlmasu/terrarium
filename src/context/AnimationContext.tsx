import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface AnimationContextType {
  isAnimating: boolean;
  toggleAnimation: () => void;
}

export const AnimationContext = createContext<AnimationContextType>({
  isAnimating: true,
  toggleAnimation: () => {},
});

interface AnimationProviderProps {
  children: ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if user has visited before to reduce animations on return visits
    const visited = localStorage.getItem('hasVisitedBefore');
    if (visited) {
      setHasVisited(true);
      // Reduce animations for returning visitors
      setIsAnimating(false);
    } else {
      localStorage.setItem('hasVisitedBefore', 'true');
    }

    // Check user's motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsAnimating(false);
    }
  }, []);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <AnimationContext.Provider value={{ isAnimating, toggleAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};