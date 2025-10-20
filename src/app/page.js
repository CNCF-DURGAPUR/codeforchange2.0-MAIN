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
  const [targetTime] = useState(() => new Date().getTime() + (1 * 60 * 1000)); // 1 minute from now

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

          <div className="relative min-h-96 flex items-center">
            {/* Left Side - Image (Overlapping) */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2/3 flex justify-center z-10">
              <div className="relative group w-full">
                {/* Green glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 rounded-full blur-3xl opacity-5 group-hover:opacity-10 transition duration-1000 animate-pulse" style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}></div>

                {/* Green highlight overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-10 transition duration-500" style={{ width: '100%', height: '100%' }}></div>

                <img
                  src="/stranger-things-2827303-removebg-preview.png"
                  alt="Stranger Things"
                  className="relative w-full h-auto drop-shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Side - Content (Overlapping) */}
            <div className="relative ml-auto w-2/3 lg:w-1/2 space-y-6 text-base leading-relaxed px-12 py-16 z-20">
              <p className="text-lg font-black text-white">
                <span className="text-xl font-extrabold">Cloud Native Durgapur</span> isn't just a tech community—it's a movement.
              </p>

              <p className="text-white font-bold">
                We're a passionate collective of developers, creators, innovators, and cloud enthusiasts from Durgapur and across Eastern India. United by curiosity and a shared drive, we build, experiment, and grow with the latest in Cloud, DevOps, Kubernetes, Microservices, AI/ML, and the entire cloud-native landscape.
              </p>

              <p className="text-white font-bold">
                <span className="text-red-400">What sets us apart?</span> We blend hands-on learning with real-world building—organizing engaging workshops, bootcamps, technical talks, hackathons, and collaborative meetups that empower the builders and thinkers of tomorrow.
              </p>

              <p className="text-white font-bold">
                At Cloud Native Durgapur, we believe tech should be inclusive, practical, and truly community-powered.
              </p>

              <p className="pt-6 text-red-300 font-semibold text-lg">
                Join us—whether you're a seasoned cloud architect, an ambitious student, or anyone eager to reimagine what's possible with cloud technology.
              </p>

              <p className="pt-6 text-red-300 font-semibold text-lg">
                Now, we're back with <span className="text-red-400">CODE CRESTZ</span> — a bigger, bolder hackathon to push innovation and collaboration to new heights.
              </p>
            </div>
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
              background: 'linear-gradient(to bottom right, #0f172a, #1e293b, #000000)',
              backgroundImage: 'url(/stranger-things-loading.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundBlendMode: 'overlay'
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>


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

                    {/* Trophy Icon */}
                    <div className="mb-8 text-6xl filter drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.7))' }}>👑</div>

                    {/* Prize Amount */}
                    <div className="mb-6">
                      <p className="text-4xl font-bold bg-gradient-to-r from-purple-200 via-red-300 to-red-400 bg-clip-text text-transparent group-hover:from-purple-100 group-hover:via-red-200 group-hover:to-red-300 transition-all" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>INR 10,000*</p>
                    </div>

                    {/* Description */}
                    <p className="text-red-200/80 text-sm">+ Exciting Sponsor Rewards + Partner Benefits (TBA)</p>

                    {/* Bottom indicator */}
                    <div className="mt-6 flex justify-center">
                      <div className="w-8 h-8 rounded-full border border-red-400/50 flex items-center justify-center group-hover:border-red-300 transition-all">
                        <div className="w-2 h-2 bg-red-400 rounded-full group-hover:bg-red-300 transition-all"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Explore All Prizes Button */}
          <div className="flex justify-center">
            <button className="px-8 py-3 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center gap-2" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
              Explore All Prizes →
            </button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="mystry-advanture" className="relative z-20 py-20 will-change-transform">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="relative text-center mb-20">
            <TextType
              text="MYSTRY ADVANTURE"
              as="h2"
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight"
              style={{ fontFamily: 'ITC Benguiat Bold, serif', color: '#4ade80' }}
              typingSpeed={50}
              showCursor={true}
              cursorCharacter="|"
            />
            
          </div>

          {/* Beginning Heading */}
          <div className="relative text-center mb-16">
            <div className="flex justify-center mb-3">
              <ShinyText
                text="The Beginning"
                speed={5}
                hollow={true}
                className="text-4xl md:text-5xl font-bold"
              />
            </div>
           
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-purple-500 to-red-600 rounded-full blur-2xl opacity-80 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-red-500 rounded-full blur-3xl opacity-70"></div>
                <div className="absolute inset-0 bg-radial-gradient from-red-500 rounded-full blur-xl opacity-60"></div>
                <img
                  src="/StrangerThings_S3_Eleven_RGB_Digital_ES-ES-removebg-preview.png"
                  alt="Eleven"
                  className="relative h-80 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <p className="mt-6 max-w-3xl mx-auto text-green-200/80 text-xl md:text-2xl leading-relaxed font-semibold" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
              Embark on an extraordinary journey through time and innovation. Follow the path of discovery as we unveil the secrets of the hackathon, where bold ideas meet brilliant minds. The adventure awaits those brave enough to enter.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="max-w-5xl mx-auto relative">
            {/* Central Timeline Line - Purple to Red Gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 via-red-500 to-purple-600"></div>
            {/* Glow Effect - Purple and Red */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-purple-500/30 via-red-500/40 to-purple-500/30 blur-lg"></div>
            {/* Additional Red Glow */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-full bg-gradient-to-b from-transparent via-red-600/20 to-transparent blur-2xl"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* Timeline Item 1 - Left */}
              <motion.div
                className="flex gap-8 items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="w-1/2 text-right pr-8">
                  <div className="relative group">
                    {/* Glowing background effect - Purple to Red */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-red-500 to-purple-600 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-purple-900/60 via-slate-900/70 to-red-900/40 backdrop-blur-xl border border-purple-500/50 rounded-xl p-8 overflow-hidden">
                      {/* Animated border - Purple and Red */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-red-400/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Top accent line - Red gradient */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-50"></div>
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-end mb-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                          <span className="text-xs font-semibold text-red-300 uppercase tracking-widest">Event</span>
                        </div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-200 via-red-300 to-red-400 bg-clip-text text-transparent mb-3 group-hover:from-purple-100 group-hover:via-red-200 group-hover:to-red-300 transition-all" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>Registration Opens</h3>
                        <div className="flex items-center justify-end mb-4">
                          <div className="h-px flex-grow bg-gradient-to-r from-transparent to-red-500/30 mr-3"></div>
                          <p className="text-sm font-bold text-red-300">April 1, 2026</p>
                        </div>
                        <p className="text-red-200/80 leading-relaxed text-sm">Start registering for the hackathon and secure your spot</p>
                        <div className="mt-4 flex justify-end">
                          <div className="w-8 h-8 rounded-full border border-red-400/50 flex items-center justify-center group-hover:border-red-300 transition-all">
                            <div className="w-2 h-2 bg-red-400 rounded-full group-hover:bg-red-300 transition-all"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-red-500 to-red-600 rounded-full ring-4 ring-slate-900 ring-offset-4 ring-offset-red-500/30 flex-shrink-0 shadow-lg shadow-red-500/50"></div>
                <div className="w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-purple-500 to-red-600 rounded-full blur-2xl opacity-80 animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-red-500 rounded-full blur-3xl opacity-70"></div>
                    <div className="absolute inset-0 bg-radial-gradient from-red-500 rounded-full blur-xl opacity-60"></div>
                    <img
                      src="/Jane_Ives-removebg-preview.png"
                      alt="Jane Ives"
                      className="relative h-64 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Timeline Item 2 - Right */}
              <motion.div
                className="flex gap-8 items-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-purple-500 to-red-600 rounded-full blur-2xl opacity-80 animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-red-500 rounded-full blur-3xl opacity-70"></div>
                    <div className="absolute inset-0 bg-radial-gradient from-red-500 rounded-full blur-xl opacity-60"></div>
                    <img
                      src="/Michael_Wheeler-removebg-preview.png"
                      alt="Michael Wheeler"
                      className="relative h-64 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full ring-4 ring-slate-900 ring-offset-4 ring-offset-purple-500/30 flex-shrink-0 shadow-lg shadow-purple-500/50"></div>
                <div className="w-1/2 text-left pl-8">
                  <div className="relative group">
                    {/* Glowing background effect - Purple to Red */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-purple-500 to-red-600 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-red-900/40 via-slate-900/70 to-purple-900/60 backdrop-blur-xl border border-red-500/50 rounded-xl p-8 overflow-hidden">
                      {/* Animated border - Red and Purple */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/0 via-red-400/20 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Top accent line - Red gradient */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-50"></div>
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center mb-3">
                          <span className="text-xs font-semibold text-red-300 uppercase tracking-widest">Event</span>
                          <div className="w-2 h-2 bg-red-400 rounded-full ml-2 animate-pulse"></div>
                        </div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-red-200 via-red-300 to-purple-400 bg-clip-text text-transparent mb-3 group-hover:from-red-100 group-hover:via-red-200 group-hover:to-purple-300 transition-all" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>Team Formation Deadline</h3>
                        <div className="flex items-center mb-4">
                          <p className="text-sm font-bold text-red-300">April 15, 2026</p>
                          <div className="h-px flex-grow bg-gradient-to-r from-red-500/30 to-transparent ml-3"></div>
                        </div>
                        <p className="text-red-200/80 leading-relaxed text-sm">Final deadline to form your team and submit team details</p>
                        <div className="mt-4 flex justify-start">
                          <div className="w-8 h-8 rounded-full border border-red-400/50 flex items-center justify-center group-hover:border-red-300 transition-all">
                            <div className="w-2 h-2 bg-red-400 rounded-full group-hover:bg-red-300 transition-all"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Timeline Item 3 - Left */}
              <motion.div
                className="flex gap-8 items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="w-1/2 text-right pr-8">
                  <div className="relative group">
                    {/* Glowing background effect - Purple to Red */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-red-500 to-purple-600 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-purple-900/60 via-slate-900/70 to-red-900/40 backdrop-blur-xl border border-red-500/50 rounded-xl p-8 overflow-hidden">
                      {/* Animated border - Purple and Red */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-red-400/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Top accent line - Red gradient */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-50"></div>
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-end mb-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                          <span className="text-xs font-semibold text-red-300 uppercase tracking-widest">Event</span>
                        </div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-200 via-red-300 to-red-400 bg-clip-text text-transparent mb-3 group-hover:from-purple-100 group-hover:via-red-200 group-hover:to-red-300 transition-all" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>Hackathon Begins</h3>
                        <div className="flex items-center justify-end mb-4">
                          <div className="h-px flex-grow bg-gradient-to-r from-transparent to-red-500/30 mr-3"></div>
                          <p className="text-sm font-bold text-red-300">April 22, 2026</p>
                        </div>
                        <p className="text-red-200/80 leading-relaxed text-sm">The 48-hour coding marathon starts. Let the innovation begin!</p>
                        <div className="mt-4 flex justify-end">
                          <div className="w-8 h-8 rounded-full border border-red-400/50 flex items-center justify-center group-hover:border-red-300 transition-all">
                            <div className="w-2 h-2 bg-red-400 rounded-full group-hover:bg-red-300 transition-all"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-red-500 to-red-600 rounded-full ring-4 ring-slate-900 ring-offset-4 ring-offset-red-500/30 flex-shrink-0 shadow-lg shadow-red-500/50"></div>
                <div className="w-1/2 flex justify-start">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-purple-500 to-red-600 rounded-full blur-2xl opacity-80 animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-red-500 rounded-full blur-3xl opacity-70"></div>
                    <div className="absolute inset-0 bg-radial-gradient from-red-500 rounded-full blur-xl opacity-60"></div>
                    <img
                      src="/stranger-things-photoroom.png"
                      alt="Stranger Things"
                      className="relative h-72 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Timeline Item 3.5 - Mid Evaluation - Right */}
              <motion.div
                className="flex gap-8 items-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="w-1/2 flex justify-end">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-purple-500 to-red-600 rounded-full blur-2xl opacity-80 animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-red-500 rounded-full blur-3xl opacity-70"></div>
                    <div className="absolute inset-0 bg-radial-gradient from-red-500 rounded-full blur-xl opacity-60"></div>
                    <img
                      src="/lucas-sinclair-photoroom.png"
                      alt="Lucas Sinclair"
                      className="relative h-72 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-red-500 to-red-600 rounded-full ring-4 ring-slate-900 ring-offset-4 ring-offset-red-500/30 flex-shrink-0 shadow-lg shadow-red-500/50"></div>
                <div className="w-1/2 text-left pl-8">
                  <div className="relative group">
                    {/* Glowing background effect - Red to Purple */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-purple-500 to-red-600 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-red-900/40 via-slate-900/70 to-purple-900/60 backdrop-blur-xl border border-red-500/50 rounded-xl p-8 overflow-hidden">
                      {/* Animated border - Red and Purple */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/0 via-red-400/20 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Top accent line - Red gradient */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-50"></div>
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center mb-3">
                          <span className="text-xs font-semibold text-red-300 uppercase tracking-widest">Event</span>
                          <div className="w-2 h-2 bg-red-400 rounded-full ml-2 animate-pulse"></div>
                        </div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-red-200 via-red-300 to-purple-400 bg-clip-text text-transparent mb-3 group-hover:from-red-100 group-hover:via-red-200 group-hover:to-purple-300 transition-all" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>Mid Evaluation</h3>
                        <div className="flex items-center mb-4">
                          <p className="text-sm font-bold text-red-300">April 23, 2026</p>
                          <div className="h-px flex-grow bg-gradient-to-r from-red-500/30 to-transparent ml-3"></div>
                        </div>
                        <p className="text-red-200/80 leading-relaxed text-sm">Judges review projects at the halfway point and provide feedback</p>
                        <div className="mt-4 flex justify-start">
                          <div className="w-8 h-8 rounded-full border border-red-400/50 flex items-center justify-center group-hover:border-red-300 transition-all">
                            <div className="w-2 h-2 bg-red-400 rounded-full group-hover:bg-red-300 transition-all"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Timeline Item 4 - Left */}
              <motion.div
                className="flex gap-8 items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="w-1/2 text-right pr-8">
                  <div className="relative group">
                    {/* Glowing background effect - Purple to Red */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-red-500 to-purple-600 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-purple-900/60 via-slate-900/70 to-red-900/40 backdrop-blur-xl border border-red-500/50 rounded-xl p-8 overflow-hidden">
                      {/* Animated border - Purple and Red */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-red-400/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Top accent line - Red gradient */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-50"></div>
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-end mb-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                          <span className="text-xs font-semibold text-red-300 uppercase tracking-widest">Event</span>
                        </div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-200 via-red-300 to-red-400 bg-clip-text text-transparent mb-3 group-hover:from-purple-100 group-hover:via-red-200 group-hover:to-red-300 transition-all" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>Submission Deadline</h3>
                        <div className="flex items-center justify-end mb-4">
                          <div className="h-px flex-grow bg-gradient-to-r from-transparent to-red-500/30 mr-3"></div>
                          <p className="text-sm font-bold text-red-300">April 24, 2026</p>
                        </div>
                        <p className="text-red-200/80 leading-relaxed text-sm">Submit your final project and presentation materials</p>
                        <div className="mt-4 flex justify-end">
                          <div className="w-8 h-8 rounded-full border border-red-400/50 flex items-center justify-center group-hover:border-red-300 transition-all">
                            <div className="w-2 h-2 bg-red-400 rounded-full group-hover:bg-red-300 transition-all"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-red-500 to-red-600 rounded-full ring-4 ring-slate-900 ring-offset-4 ring-offset-red-500/30 flex-shrink-0 shadow-lg shadow-red-500/50"></div>
                <div className="w-1/2 flex justify-start">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-purple-500 to-red-600 rounded-full blur-2xl opacity-80 animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-red-500 rounded-full blur-3xl opacity-70"></div>
                    <div className="absolute inset-0 bg-radial-gradient from-red-500 rounded-full blur-xl opacity-60"></div>
                    <img
                      src="/nancy-wheeler-photoroom.png"
                      alt="Nancy Wheeler"
                      className="relative h-72 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Timeline Item 5 - Right */}
              <motion.div
                className="flex gap-8 items-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="w-1/2 flex justify-end">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-purple-500 to-red-600 rounded-full blur-2xl opacity-80 animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-red-500 rounded-full blur-3xl opacity-70"></div>
                    <div className="absolute inset-0 bg-radial-gradient from-red-500 rounded-full blur-xl opacity-60"></div>
                    <img
                      src="/character-photoroom.png"
                      alt="Character"
                      className="relative h-72 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-red-500 to-red-600 rounded-full ring-4 ring-slate-900 ring-offset-4 ring-offset-red-500/30 flex-shrink-0 shadow-lg shadow-red-500/50"></div>
                <div className="w-1/2 text-left pl-8">
                  <div className="relative group">
                    {/* Glowing background effect - Red to Purple */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-purple-500 to-red-600 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-red-900/40 via-slate-900/70 to-purple-900/60 backdrop-blur-xl border border-red-500/50 rounded-xl p-8 overflow-hidden">
                      {/* Animated border - Red and Purple */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/0 via-red-400/20 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Top accent line - Red gradient */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-50"></div>
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center mb-3">
                          <span className="text-xs font-semibold text-red-300 uppercase tracking-widest">Event</span>
                          <div className="w-2 h-2 bg-red-400 rounded-full ml-2 animate-pulse"></div>
                        </div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-red-200 via-red-300 to-purple-400 bg-clip-text text-transparent mb-3 group-hover:from-red-100 group-hover:via-red-200 group-hover:to-purple-300 transition-all" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>Winners Announced</h3>
                        <div className="flex items-center mb-4">
                          <p className="text-sm font-bold text-red-300">April 25, 2026</p>
                          <div className="h-px flex-grow bg-gradient-to-r from-red-500/30 to-transparent ml-3"></div>
                        </div>
                        <p className="text-red-200/80 leading-relaxed text-sm">Celebrate with us as we announce the winning teams and award prizes</p>
                        <div className="mt-4 flex justify-start">
                          <div className="w-8 h-8 rounded-full border border-red-400/50 flex items-center justify-center group-hover:border-red-300 transition-all">
                            <div className="w-2 h-2 bg-red-400 rounded-full group-hover:bg-red-300 transition-all"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Timeline Item 6 - End Ceremony - Left */}
              <motion.div
                className="flex gap-8 items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="w-1/2 text-right pr-8">
                  <div className="relative group">
                    {/* Glowing background effect - Purple to Red */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-red-500 to-purple-600 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-purple-900/60 via-slate-900/70 to-red-900/40 backdrop-blur-xl border border-red-500/50 rounded-xl p-8 overflow-hidden">
                      {/* Animated border - Purple and Red */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-red-400/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Top accent line - Red gradient */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-50"></div>
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-end mb-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                          <span className="text-xs font-semibold text-red-300 uppercase tracking-widest">Event</span>
                        </div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-200 via-red-300 to-red-400 bg-clip-text text-transparent mb-3 group-hover:from-purple-100 group-hover:via-red-200 group-hover:to-red-300 transition-all" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>End Ceremony</h3>
                        <div className="flex items-center justify-end mb-4">
                          <div className="h-px flex-grow bg-gradient-to-r from-transparent to-red-500/30 mr-3"></div>
                          <p className="text-sm font-bold text-red-300">April 25, 2026</p>
                        </div>
                        <p className="text-red-200/80 leading-relaxed text-sm">Join us for the closing ceremony and networking session with all participants</p>
                        <div className="mt-4 flex justify-end">
                          <div className="w-8 h-8 rounded-full border border-red-400/50 flex items-center justify-center group-hover:border-red-300 transition-all">
                            <div className="w-2 h-2 bg-red-400 rounded-full group-hover:bg-red-300 transition-all"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-red-500 to-red-600 rounded-full ring-4 ring-slate-900 ring-offset-4 ring-offset-red-500/30 flex-shrink-0 shadow-lg shadow-red-500/50"></div>
                <div className="w-1/2 flex justify-start">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-purple-500 to-red-600 rounded-full blur-2xl opacity-80 animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-red-500 rounded-full blur-3xl opacity-70"></div>
                    <div className="absolute inset-0 bg-radial-gradient from-red-500 rounded-full blur-xl opacity-60"></div>
                    <img
                      src="/st-character-poster-photoroom.png"
                      alt="Stranger Things Poster"
                      className="relative h-72 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* End of the Adventure Section */}
      <section className="relative z-20 py-20 will-change-transform">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-red-500 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-8">
                <ShinyText
                  text="End of the Adventure"
                  speed={5}
                  hollow={true}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold"
                />
              </div>

              <p className="text-xl md:text-2xl text-purple-200/90 mb-6 leading-relaxed" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
                The journey through CODE CRESTZ has been extraordinary. From registration to the closing ceremony, you've witnessed innovation, creativity, and the power of collaboration.
              </p>

              <p className="text-lg md:text-xl text-red-300/80 mb-8 leading-relaxed" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
                But remember, this is just the beginning. The adventure continues beyond the hackathon. Keep coding, keep innovating, and keep pushing the boundaries of what's possible.
              </p>

              {/* Decorative elements */}
              <div className="flex justify-center gap-4 mt-12">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsors & Community Partners Section */}
      <section id="sponsors" className="relative z-20 py-20 will-change-transform">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="relative text-center mb-16">
            <div className="relative z-10 pt-8">
              <TextType
                text="ADVENTURE SUPPORTS"
                as="h2"
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight"
                style={{ fontFamily: 'ITC Benguiat Bold, serif', color: '#4ade80' }}
                typingSpeed={50}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>
          </div>

          {/* Combined Grid with Hover Effect */}
          <div className="max-w-7xl mx-auto">
            <HoverEffect
              className="grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
              items={[
                { title: "GitHub", description: "Version Control & Collaboration Platform" },
                { title: "CORE", description: "Blockchain Infrastructure" },
                { title: "ChainIDE", description: "Web3 Development Environment" },
                { title: "Devfolio", description: "Hackathon Management Platform" },
                { title: "CIVIC", description: "Identity Verification Solutions" },
                { title: "ETHIndia", description: "Ethereum Community & Events" },
                { title: "STARKNET", description: "Layer 2 Scaling Solution" },
                { title: "PHAROS", description: "Blockchain Analytics" },
                { title: "APTOS", description: "Next-Gen Blockchain" },
                { title: "Rise In", description: "Career Development Platform" },
                { title: "edugraph", description: "Educational Technology" },
                { title: "Filecoin", description: "Decentralized Storage Network" },
                { title: "BUILDERS", description: "Developer Community" },
                { title: "Aethir", description: "Cloud Computing Infrastructure" },
                { title: "akomi", description: "Digital Solutions Provider" },
                { title: "XYZ", description: "Innovation Partner" },
                { title: "Merchanzi", description: "E-commerce Solutions" },
                { title: "SNU", description: "Academic Partner" },
                { title: "MLH", description: "Major League Hacking" },
                { title: "Partner 1", description: "Community Support & Collaboration" },
                { title: "Partner 2", description: "Educational Resources" },
                { title: "Partner 3", description: "Technical Mentorship" },
                { title: "Partner 4", description: "Innovation Hub" },
                { title: "Partner 5", description: "Developer Advocacy" },
                { title: "Partner 6", description: "Open Source Community" },
                { title: "Partner 7", description: "Tech Ecosystem" },
                { title: "Partner 8", description: "Student Programs" },
                { title: "Partner 9", description: "Industry Connect" },
                { title: "Partner 10", description: "Skill Development" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section
      <section id="testimonials" className="relative z-20 py-20">
        <div className="container mx-auto px-4 relative z-10"> */}

          {/* Section header */}
          {/* <div className="relative text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4 tracking-tight" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
              Testimonials
            </h2>
          </div> */}

          {/* Testimonials rows (two moving rows) */}
          {/* {(() => {
            const data = [
              {
                quote: "An amazing opportunity to connect with practitioners and learn by doing.",
                name: "Soumyadip Chowdhury",
                role: "Software Engineer, RedHat",
              },
              {
                quote: "Thank you Cloud Native Durgapur team for creating a welcoming community.",
                name: "Riddhi Dutta",
                role: "SWE-3, ex-Amazon",
              },
              {
                quote: "A well-organized event with high-quality sessions and great networking.",
                name: "Arsh Goyal",
                role: "Senior Software Engineer, Samsung",
              },
              {
                quote: "This event helped young engineers discover and build real cloud skills.",
                name: "Debashis Sen",
                role: "Chairman & MD, WBHIDCO",
              },
              {
                quote: "Great to see a community driving open-source and cloud-native adoption.",
                name: "Prof. Dr. Dhrubajyoti Chattopadhyay",
                role: "Vice-Chancellor, Sister Nivedita University",
              },
              {
                quote: "Kudos to the organizers for seamless execution and strong vision.",
                name: "Sanjay Kumar Das",
                role: "Managing Director, Webel",
              },
            ]; */}

            {/* const card = (t, key) => {
              const initials = t.name.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase();
              return (
                <div key={key} className="w-[320px] shrink-0 rounded-xl border border-green-500/50 bg-green-900/20 backdrop-blur-md shadow-sm p-5 flex flex-col gap-4">
                  <p className="text-green-200 leading-relaxed">“{t.quote}”</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600/40 to-teal-600/40 ring-1 ring-green-500/40 flex items-center justify-center text-green-200 font-bold">
                      {initials}
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold text-green-300">{t.name}</div>
                      <div className="text-teal-400">{t.role}</div>
                    </div>
                  </div>
                </div>
              );
            };

            const row1 = data.slice(0, 4).map((t, i) => card(t, `r1-${i}`));
            // Use the same number of items as row1 to ensure identical segment widths
            const row2 = data.slice(2, 6).map((t, i) => card(t, `r2-${i}`));

            return (
              <div className="space-y-8">
                <InfiniteMovingCards
                  items={data.slice(0, 4).map(t => ({
                    quote: t.quote,
                    name: t.name,
                    title: t.role,
                  }))}
                  direction="left"
                  speed="slow"
                  pauseOnHover={true}
                />
                <InfiniteMovingCards
                  items={data.slice(2, 6).map(t => ({
                    quote: t.quote,
                    name: t.name,
                    title: t.role,
                  }))}
                  direction="right"
                  speed="slow"
                  pauseOnHover={true}
                />
              </div>
            );
          })()}

        </div>
      </section> */}

      {/* FAQs Section - Space Theme */}
      <section id="faqs" className="relative z-20 py-20">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section header */}
          <div className="relative text-center mb-8">
            <TextType
              text="FAQs"
              as="h2"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight"
              style={{ fontFamily: 'ITC Benguiat Bold, serif', color: '#ef4444' }}
              typingSpeed={50}
              showCursor={true}
              cursorCharacter="|"
            />
            <p className="mt-6 max-w-3xl mx-auto text-red-200/90">
              It doesn't matter if you are a beginner or a seasoned hacker; we've got you covered. Our FAQs will solve most of your doubts and queries.
            </p>
          </div>

          {/* Accordion */}
          {(() => {
            const faqs = [
              { q: "What is a Hackathon?", a: "A hackathon is an event where people collaborate intensively on software or hardware projects over a short period, typically 24–48 hours." },
              { q: "Who can participate?", a: "Students, professionals, and enthusiasts of all levels are welcome. Diversity of skills and backgrounds is encouraged." },
              { q: "How much does it cost to participate?", a: "Participation is generally free unless otherwise specified in the event details." },
              { q: "Can I submit a project I've already worked on?", a: "We encourage building something new during the event. Prior work can be used as building blocks, but the final submission should be created during the hackathon." },
              { q: "What is the maximum/minimum team size?", a: "Teams of 2–4 are ideal. Solo participation is allowed, and we will also help you form teams on-site." },
              { q: "Will hardware toolkits be available on-site?", a: "Limited hardware kits may be available depending on sponsors. You can also bring your own devices/kits." },
              { q: "What are the guidelines for the teams participating in the Hardware track?", a: "Follow safety rules, document your design, and ensure components are clearly listed. Judges may require a short demo of the prototype." },
              { q: "What will be provided for participants at the venue?", a: "Power, internet, basic refreshments, and seating will be arranged. Bring your laptops, chargers, and any special hardware you need." },
              { q: "Can I participate remotely?", a: "Remote participation depends on the specific event format. If enabled, we will share details ahead of time." },
            ];

            return (
              <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((item, idx) => {
                  const open = faqOpenIndex === idx;
                  return (
                    <motion.div
                      key={idx}
                      className="group relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: false, margin: "-100px" }}
                    >
                      {/* Glowing background effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-red-900/30 via-purple-900/30 to-red-900/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                      <div className="relative bg-red-900/20 border border-red-500/40 rounded-2xl overflow-hidden backdrop-blur-sm">
                        <button
                          type="button"
                          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-red-600/20 transition-all duration-300"
                          onClick={() => setFaqOpenIndex(open ? null : idx)}
                          aria-expanded={open}
                          aria-controls={`faq-panel-${idx}`}
                        >
                          <span className="text-red-300 font-bold text-lg" style={{ fontFamily: 'ITC Benguiat Bold, serif', fontWeight: '900' }}>{item.q}</span>
                          <motion.span
                            className="shrink-0 w-8 h-8 rounded-full border-2 border-red-500/60 flex items-center justify-center text-red-300 font-bold"
                            animate={{ rotate: open ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ fontFamily: 'ITC Benguiat Bold, serif' }}
                          >
                            {open ? "−" : "+"}
                          </motion.span>
                        </button>
                        {open && (
                          <motion.div
                            id={`faq-panel-${idx}`}
                            className="px-6 pb-5 text-red-200/80 border-t border-red-500/20 text-base leading-relaxed"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ fontFamily: 'ITC Benguiat Bold, serif', fontWeight: '600' }}
                          >
                            {item.a}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </section>



      {/* Footer - Space Theme */}
      <footer className="relative z-20 text-white py-12 border-t border-green-500/20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 relative">
                <Image
                  src="/LOGO__1_-removebg-preview.png"
                  alt="Logo"
                  fill
                  sizes="2.5rem"
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
                Code CrestZ
              </span>
            </div>
            <div className="text-green-300/80">
              <p>&copy; 2024 Code CrestZ. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

