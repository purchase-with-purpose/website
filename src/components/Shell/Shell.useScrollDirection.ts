import { useEffect, useState } from "react";

interface Options {
  threshold?: number; // how far up user must scroll before triggering
}

export function useScrollDirection({ threshold = 200 }: Options = {}) {
  const [direction, setDirection] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastDownScrollY = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY) {
        setDirection("down");
        lastDownScrollY = current;
      } else if (current < lastScrollY) {
        const scrolledUp = lastDownScrollY - current;
        if (scrolledUp >= threshold) {
          setDirection("up");
        }
      }

      lastScrollY = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return direction;
}
