'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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

function CountdownTimer({ onCountdownEnd }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isEnded, setIsEnded] = useState(false);
  const [targetTime] = useState(() => new Date('2026-04-01T00:00:00').getTime()); // April 1, 2026 - Registration Opens

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
        setIsEnded(false);
      } else {
        setIsEnded(true);
        onCountdownEnd();
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetTime, onCountdownEnd]);

  if (isEnded) {
    return null;
  }

  return (
    <motion.div
      className="flex justify-center gap-8 mt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      {[
        { label: 'DAYS', value: timeLeft.days },
        { label: 'HOURS', value: timeLeft.hours },
        { label: 'MINS', value: timeLeft.minutes },
        { label: 'SECS', value: timeLeft.seconds }
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: 'ITC Benguiat Bold, serif',
              WebkitTextStroke: '2px #ef4444',
              color: 'transparent',
              textShadow: '0 0 20px rgba(239, 68, 68, 0.8)',
              minWidth: '100px',
              textAlign: 'center'
            }}
          >
            {String(item.value).padStart(2, '0')}
          </div>
          <div
            className="text-base md:text-lg font-bold uppercase tracking-widest"
            style={{
              fontFamily: 'ITC Benguiat Bold, serif',
              color: '#ef4444'
            }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default function SplashScreen({ children }) {
  const [countdownEnded, setCountdownEnded] = useState(false);
  const [isRootPath, setIsRootPath] = useState(true);
  const [showLoadingComplete, setShowLoadingComplete] = useState(false);

  useEffect(() => {
    // Check if we're on the root path
    const isRoot = typeof window !== 'undefined' && window.location.pathname === '/';
    setIsRootPath(isRoot);
  }, []);

  const handleCountdownEnd = () => {
    setCountdownEnded(true);
    // Wait 8 seconds (loading animation duration) before showing the page
    setTimeout(() => {
      setShowLoadingComplete(true);
      // Mark countdown as shown in this session
      sessionStorage.setItem('countdownShown', 'true');
    }, 8000);
  };

  return (
    <AnimatePresence mode="wait">
      {isRootPath && !showLoadingComplete ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div
            className="relative min-h-screen flex items-center justify-center overflow-hidden w-full"
            style={{
              backgroundImage: 'url(/stranger-things-loading.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >


            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              {!countdownEnded ? (
                // Countdown Content
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
                        text="Hackathon Starts In"
                        speed={3}
                        className="text-2xl md:text-3xl"
                        hollow={true}
                      />
                    </div>
                  </motion.div>

                  {/* Countdown Timer */}
                  <CountdownTimer onCountdownEnd={handleCountdownEnd} />
                </motion.div>
              ) : (
                // Loading Content
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
              )}
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

