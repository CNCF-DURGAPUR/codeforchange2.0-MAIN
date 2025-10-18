"use client";

import { useEffect, useState, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className = "",
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "15s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-6 py-1 w-max flex-nowrap ${
          start && "animate-scroll"
        } ${pauseOnHover && "hover:[animation-play-state:paused]"}`}
      >
        {items.map((item, idx) => {
          // Check if this is a content-only item (like images in About section)
          const isContentOnly = item.content && !item.quote && !item.name && !item.title;

          return (
            <li
              key={`infinite-card-${idx}`}
              className={
                isContentOnly
                  ? "flex-shrink-0" // No box styling for content-only items
                  : "w-[350px] max-w-full relative rounded-2xl border border-blue-300/50 flex-shrink-0 bg-white/10 backdrop-blur-md px-8 py-6 md:w-[450px]"
              }
              style={
                isContentOnly
                  ? {}
                  : {
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                    }
              }
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                {item.quote && (
                  <span className="relative z-20 text-sm leading-[1.6] text-blue-800 font-normal">
                    {item.quote}
                  </span>
                )}
                {item.content && (
                  <div className="relative z-20">
                    {item.content}
                  </div>
                )}
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  {item.image && (
                    <span className="flex flex-col gap-1">
                      {item.image}
                    </span>
                  )}
                  {(item.name || item.title) && (
                    <span className="flex flex-col gap-1">
                      {item.name && (
                        <span className="text-sm leading-[1.6] text-blue-900 font-bold" style={{ fontFamily: 'Michroma, sans-serif' }}>
                          {item.name}
                        </span>
                      )}
                      {item.title && (
                        <span className="text-sm leading-[1.6] text-blue-700 font-normal">
                          {item.title}
                        </span>
                      )}
                    </span>
                  )}
                </div>
              </blockquote>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

