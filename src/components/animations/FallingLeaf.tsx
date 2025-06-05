import React from 'react';

interface FallingLeafProps {
  delay: number;
  left: string;
  size: 'sm' | 'md' | 'lg';
}

const FallingLeaf: React.FC<FallingLeafProps> = ({ delay, left, size }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const animationDuration = 15 + Math.random() * 10;
  const swayAmount = 100 + Math.random() * 100;
  
  return (
    <div 
      className={`absolute top-0 ${sizes[size]} opacity-70 pointer-events-none`}
      style={{
        left,
        animation: `fallingSway ${animationDuration}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-sage w-full h-full transform rotate-45"
      >
        <path 
          d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 12 2 12 2C12 2 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" 
          fill="currentColor" 
          fillOpacity="0.6" 
        />
      </svg>
      
      <style jsx>{`
        @keyframes fallingSway {
          0% {
            transform: translateY(-100px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          40% {
            transform: translateY(40vh) translateX(${swayAmount}px) rotate(180deg);
          }
          60% {
            transform: translateY(60vh) translateX(-${swayAmount * 0.5}px) rotate(360deg);
          }
          80% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(110vh) translateX(${swayAmount * 0.2}px) rotate(540deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FallingLeaf;