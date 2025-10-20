'use client';

import { useState } from 'react';

const ShinyText = ({ text, disabled = false, speed = 5, className = '', hollow = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const animationDuration = `${speed}s`;

  const fuzzyStyle = isHovered ? {
    transform: `translate(${Math.random() * 2 - 1}px, ${Math.random() * 2 - 1}px)`,
    filter: 'blur(0.5px)'
  } : {};

  if (hollow) {
    return (
      <div
        className={`inline-block ${disabled ? '' : 'animate-shine'} ${className} transition-all duration-75`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          fontWeight: 900,
          backgroundColor: '#000000',
          padding: '1.5rem 2.5rem',
          borderRadius: '0.75rem',
          backgroundImage:
            'linear-gradient(120deg, rgba(239, 68, 68, 0) 40%, rgba(239, 68, 68, 1) 50%, rgba(239, 68, 68, 0) 60%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          WebkitTextStroke: '2px rgba(239, 68, 68, 1)',
          color: 'transparent',
          animationDuration: animationDuration,
          textShadow: '0 0 20px rgba(239, 68, 68, 0.8)',
          ...fuzzyStyle
        }}
      >
        {text}
      </div>
    );
  }

  return (
    <div
      className={`bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className} transition-all duration-75`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        fontWeight: 900,
        backgroundColor: '#000000',
        padding: '1.5rem 2.5rem',
        borderRadius: '0.75rem',
        backgroundImage:
          'linear-gradient(120deg, rgba(239, 68, 68, 0) 40%, rgba(239, 68, 68, 1) 50%, rgba(239, 68, 68, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        animationDuration: animationDuration,
        textShadow: '0 0 20px rgba(239, 68, 68, 0.8)',
        ...fuzzyStyle
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;

