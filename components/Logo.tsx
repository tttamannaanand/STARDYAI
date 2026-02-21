
import React from 'react';

interface LogoProps {
  className?: string;
  animate?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "size-8", animate = false }) => {
  return (
    <div className={`${className} rounded-full overflow-hidden shrink-0 ${animate ? 'animate-pulse' : ''}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Navy Background (#001b3d) matching the provided image */}
        <rect width="100" height="100" fill="#001b3d"/>
        
        {/* Geometric Orange Shapes (#f89720) - Precise paths recreated from the image */}
        <path d="M0 0 H100 V22.5 H63.5 L50 0 L36.5 22.5 H0 V0Z" fill="#f89720"/>
        <path d="M0 100 L41 25.5 L75 75 L41 100 H0Z" fill="#f89720"/>
        <path d="M100 22.5 V100 L75 75 V22.5 H100Z" fill="#f89720"/>
        <path d="M41 28.5 H60.5 L63.5 39.5 L41 56.5 V28.5Z" fill="#f89720"/>
      </svg>
    </div>
  );
};

export default Logo;
