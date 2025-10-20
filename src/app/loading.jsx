'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import ShinyText from '../ui/ShinyText';

function PercentageCounter() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="flex justify-center mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      <div
        className="text-4xl font-bold"
        style={{
          fontFamily: 'ITC Benguiat Bold, serif',
          WebkitTextStroke: '2px #ef4444',
          color: 'transparent',
          textShadow: '0 0 20px rgba(239, 68, 68, 0.6)'
        }}
      >
        {Math.min(Math.round(percentage), 100)}%
      </div>
    </motion.div>
  );
}

export default function LoadingPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black/40 to-black/30 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/20 via-purple-800/20 to-black/40 animate-gradient-y"></div>

        {/* Stars Background */}
        <div className="absolute inset-0 opacity-100">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                width: Math.random() * 3 + 2 + 'px',
                height: Math.random() * 3 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                opacity: Math.random() * 0.9 + 0.5,
                animationDuration: Math.random() * 3 + 2 + 's'
              }}
            />
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-1/3 -left-1/3 w-2/3 h-2/3 bg-gradient-to-br from-purple-900/35 via-red-900/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute -top-1/4 -right-1/4 w-2/3 h-2/3 bg-gradient-to-bl from-red-900/35 via-purple-900/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Loading Content */}
        <motion.div
          className="text-center w-full flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12 w-full flex flex-col items-center"
          >
            <div className="flex justify-center w-full">
              <ShinyText
                text="CODE CRESTZ"
                speed={3}
                className="text-6xl md:text-7xl font-bold mb-4"
                hollow={true}
              />
            </div>
            <div className="flex justify-center w-full">
              <ShinyText
                text="Loading your adventure..."
                speed={3}
                className="text-2xl md:text-3xl"
                hollow={true}
              />
            </div>
          </motion.div>

          {/* Percentage Counter */}
          <PercentageCounter />

          {/* Progress Bar - Stranger Things Style */}
          <motion.div
            className="mt-12 w-80 h-2 rounded-full overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{
              background: 'rgba(0, 0, 0, 0.5)',
              border: '2px solid rgba(239, 68, 68, 0.3)',
              boxShadow: '0 0 20px rgba(239, 68, 68, 0.2), inset 0 0 10px rgba(239, 68, 68, 0.1)'
            }}
          >
            <motion.div
              className="h-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 6, ease: 'easeInOut' }}
              style={{
                background: 'linear-gradient(90deg, #ef4444, #a855f7, #ef4444)',
                boxShadow: '0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(168, 85, 247, 0.6), inset 0 0 10px rgba(239, 68, 68, 0.5)'
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

