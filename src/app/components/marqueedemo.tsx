"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  { img: "/img/card10.jpg" },
  { img: "/img/card9.webp" },
  { img: "/img/card5.jpeg" },
  { img: "/img/card3.jpg" },
  { img: "/img/card6.jpg" },
  { img: "/img/card.jpg" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative h-44 w-54 cursor-pointer overflow-hidden rounded-xl border",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
      data-aos="zoom-in"
    >
      <img
        className="h-full w-full object-cover"
        alt="Avatar"
        src={img}
      />
    </figure>
  );
};

export function MarqueeDemo() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div
      className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8"
      data-aos="fade-up"
    >
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Marquee>

      {/* Gradient edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
