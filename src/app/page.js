"use client";

import Image from "next/image";
import Dock from "./Dock";
import { HoverEffect } from "../ui/card-hover-effect";
import ShinyText from "../ui/ShinyText";
import TextType from "../ui/TextType";

import { useState } from "react";
import { motion } from "motion/react";

export default function Home() {
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  const dockItems = [
    { label: "Home", icon: "Home", href: "#home" },
    { label: "About", icon: "About", href: "#about" },
    { label: "Prizes", icon: "Prizes", href: "#prizes" },
    { label: "Timeline", icon: "Timeline", href: "#mystry-advanture" }, // update section id to id="mystry-advanture"
    { label: "Tracks", icon: "Tracks", href: "#game-zones" },
    { label: "Mentors", icon: "Mentors", href: "/team" },
    { label: "FAQ", icon: "FAQ", href: "#faqs" }, // match section id="faqs"
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black/40 to-black/30 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/20 via-green-800/20 to-black/40 animate-gradient-y"></div>

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

        {/* Left Wave */}
        <div className="absolute left-0 top-0 bottom-0 w-40 md:w-56 lg:w-72 opacity-100 z-5">
          <Image
            src="/waves-DawnI9IY.png"
            alt="Left Wave"
            fill
            sizes="(min-width: 1024px) 18rem, (min-width: 768px) 14rem, 10rem"
            className="object-cover object-left"
            priority
          />
        </div>

        {/* Right Wave */}
        <div className="absolute right-0 top-0 bottom-0 w-40 md:w-56 lg:w-72 opacity-100 transform scale-x-[-1] z-5">
          <Image
            src="/waves-DawnI9IY.png"
            alt="Right Wave"
            fill
            sizes="(min-width: 1024px) 18rem, (min-width: 768px) 14rem, 10rem"
            className="object-cover object-right"
            priority
          />
        </div>

        {/* Blended Gradient Overlay - Red, Purple, Green Mix */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top-Left: Purple to Red gradient */}
          <div className="absolute -top-1/3 -left-1/3 w-2/3 h-2/3 bg-gradient-to-br from-purple-900/35 via-red-900/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>

          {/* Top-Right: Red to Purple gradient */}
          <div className="absolute -top-1/4 -right-1/4 w-2/3 h-2/3 bg-gradient-to-bl from-red-900/35 via-purple-900/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>

          {/* Bottom-Left: Green to Purple gradient */}
          <div className="absolute -bottom-1/4 -left-1/4 w-2/3 h-2/3 bg-gradient-to-tr from-green-900/15 via-purple-900/12 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>

          {/* Bottom-Right: Red to Green gradient */}
          <div className="absolute -bottom-1/3 -right-1/3 w-2/3 h-2/3 bg-gradient-to-tl from-red-900/30 via-green-900/12 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.75s', animationDuration: '4s' }}></div>

          {/* Center: All colors mixed */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-900/20 via-red-900/25 via-green-900/10 to-purple-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
        </div>
      </div>

      {/* Dock Navigation - Bottom Center */}
      <Dock
        items={dockItems.map((item) => ({
          ...item,
          onClick: () => {
            if (item.href.startsWith("#")) {
              const element = document.querySelector(item.href);
              element?.scrollIntoView({ behavior: "smooth" });
            } else {
              window.location.href = item.href;
            }
          },
        }))}
      />

      {/* Hero Section */}
      <section id="home" className="relative z-20 h-screen w-screen flex items-center overflow-hidden -mx-[calc((100vw-100%)/2)]">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 w-full h-full bg-black/50"></div>

        <div className="container mx-auto px-4 relative z-10 flex items-center">
          {/* Hero Content - Left Side */}
                <div className="relative z-10 w-1/2">

                {/* Top Line */}

                <div className="flex flex-col justify-center items-center mb-4">
                  <div className="w-full flex justify-center">
                    <ShinyText
                      text="CODE"
                      speed={5}
                      hollow={true}
                      className="text-7xl md:text-8xl lg:text-9xl leading-none"
                    />
                  </div>
                  <div className="w-full flex justify-center">
                    <ShinyText
                      text="CRESTZ"
                      speed={5}
                      hollow={true}
                      className="text-7xl md:text-8xl lg:text-9xl leading-none"
                    />
                  </div>
                </div>

                

                {/* Bottom Line */}

                <div className="flex justify-center">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-red-600/40 to-red-600/40 text-red-300 rounded-xl font-semibold transition-colors duration-300 font-bold backdrop-blur-sm ring-1 ring-red-500/50 hover:ring-red-400/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/80"
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", mass: 0.1, stiffness: 150, damping: 12 }}
                  >
                  <span className="font-bold">REGISTRATION OPEN SOON</span>
                  </motion.button>
                </div>
        </div>
        </div>
      </section>

      {/* Marquee Section with InfiniteMovingCards */}
      <section className="relative z-20 py-4 bg-transparent border-y border-red-500/20 overflow-hidden">
        <div className="scroller relative z-20 w-full overflow-hidden [mask-image:none]" style={{ '--animation-duration': '30s', '--animation-direction': 'forwards' }}>
          <ul className="flex min-w-full shrink-0 gap-8 py-1 w-max flex-nowrap animate-scroll hover:[animation-play-state:paused]">
            <li className="flex-shrink-0">
              <span className="text-lg md:text-xl font-bold text-red-400 whitespace-nowrap" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
                36 HRS HACKATHON
              </span>
            </li>
            <li className="flex-shrink-0">
              <span className="text-lg md:text-xl font-bold text-purple-400 whitespace-nowrap" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
                CODE CRESTZ
              </span>
            </li>
            <li className="flex-shrink-0">
              <span className="text-lg md:text-xl font-bold text-red-400 whitespace-nowrap" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
                SEE YOU SOON
              </span>
            </li>
            <li className="flex-shrink-0">
              <span className="text-lg md:text-xl font-bold text-red-400 whitespace-nowrap" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
                36 HRS HACKATHON
              </span>
            </li>
            <li className="flex-shrink-0">
              <span className="text-lg md:text-xl font-bold text-purple-400 whitespace-nowrap" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
                CODE CRESTZ
              </span>
            </li>
            <li className="flex-shrink-0">
              <span className="text-lg md:text-xl font-bold text-red-400 whitespace-nowrap" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
                SEE YOU SOON
              </span>
            </li>
            <li className="flex-shrink-0">
              <span className="text-lg md:text-xl font-bold text-red-400 whitespace-nowrap" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
                36 HRS HACKATHON
              </span>
            </li>
            <li className="flex-shrink-0">
              <span className="text-lg md:text-xl font-bold text-purple-400 whitespace-nowrap" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
                CODE CRESTZ
              </span>
            </li>
            <li className="flex-shrink-0">
              <span className="text-lg md:text-xl font-bold text-red-400 whitespace-nowrap" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
                SEE YOU SOON
              </span>
            </li>
            <li className="flex-shrink-0">
              <span className="text-lg md:text-xl font-bold text-red-400 whitespace-nowrap" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
                36 HRS HACKATHON
              </span>
            </li>
            <li className="flex-shrink-0">
              <span className="text-lg md:text-xl font-bold text-purple-400 whitespace-nowrap" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
                CODE CRESTZ
              </span>
            </li>
            <li className="flex-shrink-0">
              <span className="text-lg md:text-xl font-bold text-red-400 whitespace-nowrap" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
                SEE YOU SOON
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* About Section - Space Theme */}
      <section id="about" className="relative z-20 pt-20 pb-20 overflow-hidden will-change-transform">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="mb-2 flex flex-col items-start justify-center overflow-hidden ml-auto w-2/3 lg:w-1/2 px-12" suppressHydrationWarning>
            <TextType
              text="The Story"
              as="h2"
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight whitespace-nowrap"
              style={{ fontFamily: 'ITC Benguiat Bold, serif', color: '#4ade80' }}
              typingSpeed={50}
              showCursor={true}
              cursorCharacter="|"
            />
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
                <span className="text-xl font-extrabold">Cloud Native Durgapur</span> isn&apos;t just a tech community&mdash;it&apos;s a movement.
              </p>

              <p className="text-white font-bold">
                We&apos;re a passionate collective of developers, creators, innovators, and cloud enthusiasts from Durgapur and across Eastern India. United by curiosity and a shared drive, we build, experiment, and grow with the latest in Cloud, DevOps, Kubernetes, Microservices, AI/ML, and the entire cloud-native landscape.
              </p>

              <p className="text-white font-bold">
                <span className="text-red-400">What sets us apart?</span> We blend hands-on learning with real-world building&mdash;organizing engaging workshops, bootcamps, technical talks, hackathons, and collaborative meetups that empower the builders and thinkers of tomorrow.
              </p>

              <p className="text-white font-bold">
                At Cloud Native Durgapur, we believe tech should be inclusive, practical, and truly community-powered.
              </p>

              <p className="pt-6 text-red-300 font-semibold text-lg">
                Join us&mdash;whether you&apos;re a seasoned cloud architect, an ambitious student, or anyone eager to reimagine what&apos;s possible with cloud technology.
              </p>

              <p className="pt-6 text-red-300 font-semibold text-lg">
                Now, we&apos;re back with <span className="text-red-400">CODE CRESTZ</span> &mdash; a bigger, bolder hackathon to push innovation and collaboration to new heights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Zones Section */}
      <section id="game-zones" className="relative z-20 py-20 will-change-transform">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="relative text-center mb-16">
            <TextType
              text="ADVENTURE TRACKS"
              as="h2"
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight"
              style={{ fontFamily: 'ITC Benguiat Bold, serif', color: '#ef4444' }}
              typingSpeed={50}
              showCursor={true}
              cursorCharacter="|"
            />
            <p className="mt-6 max-w-3xl mx-auto text-red-200/80">
              Choose your track and showcase your skills across multiple domains of innovation
            </p>
          </div>

          {/* Game Zones Grid - Transparent */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full mx-auto">
            {/* AI & ML */}
            <div className="group text-center cursor-pointer transition-all duration-300 hover:scale-110">
              <h3 className="text-4xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'Merriweather, serif', fontWeight: '900', backgroundImage: 'linear-gradient(120deg, rgba(239, 68, 68, 0) 40%, rgba(239, 68, 68, 1) 50%, rgba(239, 68, 68, 0) 60%)', backgroundSize: '200% 100%', WebkitBackgroundClip: 'text', WebkitTextStroke: '1.5px rgba(239, 68, 68, 0.6)', color: 'transparent', textShadow: '0 0 15px rgba(239, 68, 68, 0.4)' }}>AI & ML</h3>
              <p className="text-base leading-relaxed text-red-200/70" style={{ fontFamily: 'Merriweather, serif' }}>
                Develop AI/ML solutions for automation, insights, and smarter decision-making processes.
              </p>
            </div>

            {/* Blockchain & Web3 */}
            <div className="group text-center cursor-pointer transition-all duration-300 hover:scale-110">
              <h3 className="text-4xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'Merriweather, serif', fontWeight: '900', backgroundImage: 'linear-gradient(120deg, rgba(239, 68, 68, 0) 40%, rgba(239, 68, 68, 1) 50%, rgba(239, 68, 68, 0) 60%)', backgroundSize: '200% 100%', WebkitBackgroundClip: 'text', WebkitTextStroke: '1.5px rgba(239, 68, 68, 0.6)', color: 'transparent', textShadow: '0 0 15px rgba(239, 68, 68, 0.4)' }}>Blockchain & Web3</h3>
              <p className="text-base leading-relaxed text-red-200/70" style={{ fontFamily: 'Merriweather, serif' }}>
                Create decentralized applications promoting security, transparency, and user empowerment.
              </p>
            </div>

            {/* Web & App Dev */}
            <div className="group text-center cursor-pointer transition-all duration-300 hover:scale-110">
              <h3 className="text-4xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'Merriweather, serif', fontWeight: '900', backgroundImage: 'linear-gradient(120deg, rgba(239, 68, 68, 0) 40%, rgba(239, 68, 68, 1) 50%, rgba(239, 68, 68, 0) 60%)', backgroundSize: '200% 100%', WebkitBackgroundClip: 'text', WebkitTextStroke: '1.5px rgba(239, 68, 68, 0.6)', color: 'transparent', textShadow: '0 0 15px rgba(239, 68, 68, 0.4)' }}>Web & App Dev</h3>
              <p className="text-base leading-relaxed text-red-200/70" style={{ fontFamily: 'Merriweather, serif' }}>
                Build user-friendly platforms for seamless interactions and digital solutions.
              </p>
            </div>

            {/* AR & VR */}
            <div className="group text-center cursor-pointer transition-all duration-300 hover:scale-110">
              <h3 className="text-4xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'Merriweather, serif', fontWeight: '900', backgroundImage: 'linear-gradient(120deg, rgba(239, 68, 68, 0) 40%, rgba(239, 68, 68, 1) 50%, rgba(239, 68, 68, 0) 60%)', backgroundSize: '200% 100%', WebkitBackgroundClip: 'text', WebkitTextStroke: '1.5px rgba(239, 68, 68, 0.6)', color: 'transparent', textShadow: '0 0 15px rgba(239, 68, 68, 0.4)' }}>AR & VR</h3>
              <p className="text-base leading-relaxed text-red-200/70" style={{ fontFamily: 'Merriweather, serif' }}>
                Develop immersive experiences enhancing education, training, and entertainment applications.
              </p>
            </div>

            {/* Med Tech */}
            <div className="group text-center cursor-pointer transition-all duration-300 hover:scale-110">
              <h3 className="text-4xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'Merriweather, serif', fontWeight: '900', backgroundImage: 'linear-gradient(120deg, rgba(239, 68, 68, 0) 40%, rgba(239, 68, 68, 1) 50%, rgba(239, 68, 68, 0) 60%)', backgroundSize: '200% 100%', WebkitBackgroundClip: 'text', WebkitTextStroke: '1.5px rgba(239, 68, 68, 0.6)', color: 'transparent', textShadow: '0 0 15px rgba(239, 68, 68, 0.4)' }}>Med Tech</h3>
              <p className="text-base leading-relaxed text-red-200/70" style={{ fontFamily: 'Merriweather, serif' }}>
                Design technology improving healthcare delivery, diagnosis, and patient management.
              </p>
            </div>

            {/* Open Innovation */}
            <div className="group text-center cursor-pointer transition-all duration-300 hover:scale-110">
              <h3 className="text-4xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'Merriweather, serif', fontWeight: '900', backgroundImage: 'linear-gradient(120deg, rgba(239, 68, 68, 0) 40%, rgba(239, 68, 68, 1) 50%, rgba(239, 68, 68, 0) 60%)', backgroundSize: '200% 100%', WebkitBackgroundClip: 'text', WebkitTextStroke: '1.5px rgba(239, 68, 68, 0.6)', color: 'transparent', textShadow: '0 0 15px rgba(239, 68, 68, 0.4)' }}>Open Innovation</h3>
              <p className="text-base leading-relaxed text-red-200/70" style={{ fontFamily: 'Merriweather, serif' }}>
                Create collaborative solutions addressing diverse challenges across various industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Final Jackpot Section */}
      <section id="prizes" className="relative z-20 py-20 will-change-transform">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="relative text-center mb-16">
            <TextType
              text="THE MYSTRY PODIUM"
              as="h2"
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight"
              style={{ fontFamily: 'ITC Benguiat Bold, serif', color: '#ef4444' }}
              typingSpeed={50}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>

          {/* Prize Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Beta Winner - Left */}
            <motion.div
              className="group text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <div className="relative">
                {/* Glowing background effect - Purple to Red */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-red-500 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Card */}
                <div className="relative bg-gradient-to-br from-purple-900/60 via-slate-900/70 to-red-900/40 backdrop-blur-xl border border-red-500/50 rounded-2xl p-8 overflow-hidden">
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-red-400/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-50"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Badge */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-xs font-semibold text-red-300 uppercase tracking-widest">Beta Winner</span>
                    </div>

                    {/* Trophy Icon */}
                    <div className="mb-8 text-6xl filter drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.6))' }}>👑</div>

                    {/* Prize Amount */}
                    <div className="mb-6">
                      <p className="text-4xl font-bold bg-gradient-to-r from-purple-200 via-red-300 to-red-400 bg-clip-text text-transparent group-hover:from-purple-100 group-hover:via-red-200 group-hover:to-red-300 transition-all" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>INR 15,000*</p>
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

            {/* Alpha Winner - Center (Featured) */}
            <motion.div
              className="group text-center md:scale-110"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <div className="relative">
                {/* Glowing background effect - Purple to Red (Brighter) */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-red-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Card */}
                <div className="relative bg-gradient-to-br from-purple-900/70 via-slate-900/80 to-red-900/50 backdrop-blur-xl border border-red-500/70 rounded-2xl p-8 overflow-hidden">
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-red-400/30 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-70"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Badge */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-xs font-semibold text-red-300 uppercase tracking-widest">Alpha Winner</span>
                    </div>

                    {/* Trophy Icon */}
                    <div className="mb-8 text-7xl filter drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 30px rgba(239, 68, 68, 0.8))' }}>👑</div>

                    {/* Prize Amount */}
                    <div className="mb-6">
                      <p className="text-5xl font-bold bg-gradient-to-r from-purple-200 via-red-300 to-red-400 bg-clip-text text-transparent group-hover:from-purple-100 group-hover:via-red-200 group-hover:to-red-300 transition-all" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>INR 25,000*</p>
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

            {/* Gamma Winner - Right */}
            <motion.div
              className="group text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <div className="relative">
                {/* Glowing background effect - Purple to Red */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-red-500 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Card */}
                <div className="relative bg-gradient-to-br from-purple-900/60 via-slate-900/70 to-red-900/40 backdrop-blur-xl border border-red-500/50 rounded-2xl p-8 overflow-hidden">
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-red-400/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-50"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Badge */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-xs font-semibold text-red-300 uppercase tracking-widest">Gamma Winner</span>
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
                <Image
                  src="/StrangerThings_S3_Eleven_RGB_Digital_ES-ES-removebg-preview.png"
                  alt="Eleven"
                  width={640}
                  height={320}
                  className="relative h-80 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                  priority
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
                    <Image
                      src="/Jane_Ives-removebg-preview.png"
                      alt="Jane Ives"
                      width={256}
                      height={256}
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
                    <Image
                      src="/stranger-things-photoroom.png"
                      alt="Stranger Things"
                      width={288}
                      height={288}
                      className="relative h-72 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                      priority
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
                    <Image
                      src="/lucas-sinclair-photoroom.png"
                      alt="Lucas Sinclair"
                      width={288}
                      height={288}
                      className="relative h-72 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                      priority
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
                The journey through CODE CRESTZ has been extraordinary. From registration to the closing ceremony, you&apos;ve witnessed innovation, creativity, and the power of collaboration.
              </p>

              <p className="text-lg md:text-xl text-red-300/80 mb-8 leading-relaxed" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
                But remember, this is just the beginning. The adventure continues beyond the hackathon. Keep coding, keep innovating, and keep pushing the boundaries of what&apos;s possible.
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
              It doesn&apos;t matter if you are a beginner or a seasoned hacker; we&apos;ve got you covered. Our FAQs will solve most of your doubts and queries.
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
