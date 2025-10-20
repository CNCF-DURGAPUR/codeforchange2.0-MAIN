'use client';

import { motion } from 'motion/react';

function DockItem({ item, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="px-3 py-2 rounded-lg bg-transparent hover:bg-white/10 border border-transparent hover:border-white/30 transition-all duration-200 text-white font-bold text-lg md:text-xl"
      style={{ fontFamily: 'ITC Benguiat Bold, serif' }}
    >
      {item.label}
    </motion.button>
  );
}

export default function Dock({
  items,
  className = ''
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-white/5 ${className}`}
      role="toolbar"
      aria-label="Application dock"
    >
      {items.map((item, index) => (
        <DockItem
          key={index}
          item={item}
          onClick={item.onClick}
        />
      ))}
    </motion.div>
  );
}

