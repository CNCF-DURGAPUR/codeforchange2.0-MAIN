"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className = "",
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {items.map((item, idx) => {
        const Component = item?.link ? Link : 'div';
        const linkProps = item?.link ? { href: item.link } : {};

        return (
          <div key={`hover-card-${idx}-${item?.title || 'item'}`} className="relative group h-full w-full">
            <Component
              {...linkProps}
              className="relative block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence mode="wait">
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-red-600/25 backdrop-blur-md block rounded-3xl shadow-lg"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.2 },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                      transition: { duration: 0.15, delay: 0.1 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Card>
                {item.image && (
                  <div className="mb-4">
                    {item.image}
                  </div>
                )}
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            </Component>
          </div>
        );
      })}
    </div>
  );
};

export const Card = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={`rounded-2xl h-full w-full p-6 overflow-hidden bg-red-900/20 backdrop-blur-md border border-red-500/50 group-hover:border-red-400/90 group-hover:bg-red-900/30 group-hover:shadow-xl group-hover:scale-[1.02] relative z-20 transition-all duration-300 ${className}`}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className = "",
  children,
}) => {
  return (
    <h4 className={`text-blue-900 font-bold tracking-wide text-lg ${className}`} style={{ fontFamily: 'Michroma, sans-serif' }}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className = "",
  children,
}) => {
  return (
    <p
      className={`mt-4 text-blue-800 tracking-wide leading-relaxed text-sm ${className}`}
    >
      {children}
    </p>
  );
};

