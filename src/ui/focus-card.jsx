"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

export const FocusCard = ({ cards, columns = 3 }) => {
  const [hovered, setHovered] = useState(null);

  const gridCols = columns === 4
    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${gridCols} gap-6 max-w-7xl mx-auto w-full`}>
      {cards.map((card, index) => (
        <Card
          key={`focus-card-${index}-${card.title || 'card'}`}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};

const Card = ({ card, index, hovered, setHovered }) => {
  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={`rounded-2xl relative bg-blue-100 border border-blue-300 overflow-hidden h-80 md:h-96 w-full transition-all duration-300 ease-out ${
        hovered !== null && hovered !== index ? "blur-sm scale-[0.98]" : ""
      }`}
    >
      {/* Coming Soon Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <motion.span
          className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-blue-900/20 select-none whitespace-nowrap"
          style={{ fontFamily: 'Michroma, sans-serif' }}
          animate={hovered === index ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          COMING SOON
        </motion.span>
      </div>

      <div
        className={`absolute inset-0 flex items-end py-8 px-6 transition-opacity duration-300 ${
          hovered === index ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-full">
          {card.description && (
            <p className="text-sm text-blue-900 font-semibold relative z-20">
              {card.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

