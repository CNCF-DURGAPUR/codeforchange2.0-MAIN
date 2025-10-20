"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FocusCard } from "../../ui/focus-card";
import Dock from "../Dock";
import TextType from "../../ui/TextType";
import ShinyText from "../../ui/ShinyText";


export default function MentorsJudgesPage() {
  const [stars, setStars] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const generatedStars = [...Array(100)].map((_, i) => ({
      id: i,
      width: Math.random() * 3 + 2,
      height: Math.random() * 3 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.9 + 0.5,
      duration: Math.random() * 3 + 2
    }));
    setStars(generatedStars);
  }, []);

  const dockItems = [
    { label: "Home", icon: "Home", href: "/#home" },
    { label: "About", icon: "About", href: "/#about" },
    { label: "Prizes", icon: "Prizes", href: "/#prizes" },
    { label: "Timeline", icon: "Timeline", href: "/#mystry-advanture" },
    { label: "Tracks", icon: "Tracks", href: "/#game-zones" },
    { label: "Mentors", icon: "Mentors", href: "/team" },
    { label: "FAQ", icon: "FAQ", href: "/#faqs" },
  ];

  const mentors = [
    {
      description: "Mentor - Technology & Innovation",
    },
    {
      description: "Mentor - Open Source & Community",
    },
    {
      description: "Mentor - AI & Machine Learning",
    },
    {
      description: "Mentor - Full Stack Development",
    },
  ];

  const judges = [
    {
      description: "Judge - Cloud Native & DevOps",
    },
    {
      description: "Judge - Software Development",
    },
    {
      description: "Judge - Web Development",
    },
    {
      description: "Judge - Innovation & Creativity",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black/40 to-black/30 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/20 via-green-800/20 to-black/40 animate-gradient-y"></div>

        {/* Stars Background */}
        {mounted && (
          <div className="absolute inset-0 opacity-100">
            {stars.map((star) => (
              <div
                key={star.id}
                className="absolute bg-white rounded-full animate-pulse"
                style={{
                  width: star.width + 'px',
                  height: star.height + 'px',
                  left: star.left + '%',
                  top: star.top + '%',
                  opacity: star.opacity,
                  animationDuration: star.duration + 's'
                }}
              />
            ))}
          </div>
        )}

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
            window.location.href = item.href;
          },
        }))}
      />

      <main className="relative z-20 pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="relative text-center mb-16">
            <TextType
              text="Mentors & Judges"
              as="h2"
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight"
              style={{ fontFamily: 'ITC Benguiat Bold, serif', color: '#ef4444' }}
              typingSpeed={50}
              showCursor={true}
              cursorCharacter="|"
            />
            <p className="text-red-300/80 text-lg md:text-xl" style={{ fontFamily: 'ITC Benguiat Bold, serif' }}>
              Meet the experts guiding and evaluating the hackathon
            </p>
          </div>

          {/* Mentors Section */}
          <div className="mb-20">
            <div className="flex justify-center mb-12">
              <ShinyText
                text="Mentors"
                speed={5}
                hollow={true}
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
              />
            </div>
            <FocusCard cards={mentors} columns={4} />
          </div>

          {/* Judges Section */}
          <div>
            <div className="flex justify-center mb-12">
              <ShinyText
                text="Judges"
                speed={5}
                hollow={true}
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
              />
            </div>
            <FocusCard cards={judges} columns={4} />
          </div>
        </div>
      </main>
    </div>
  );
}