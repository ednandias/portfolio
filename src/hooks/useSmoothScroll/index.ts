import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

interface UseSmoothScrollProps {
  id: string;
  stagger?: boolean;
}

export function useSmoothScroll(selectors: UseSmoothScrollProps[]) {
  useGSAP(
    async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const triggers: ScrollTrigger[] = [];

      for (const selector of selectors) {
        gsap.set(selector.id, { opacity: 0, y: 100 });

        const trigger = ScrollTrigger.create({
          trigger: selector.id,
          start: "top 85%",
          onEnter: () =>
            gsap.to(selector.id, {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: selector.stagger ? 0.1 : 0,
            }),

          onLeaveBack: () =>
            gsap.to(selector.id, { opacity: 0, y: 100, duration: 1 }),
        });

        triggers.push(trigger);
      }

      return () => {
        triggers.forEach((t) => t.kill());
      };
    },
    { dependencies: [selectors.forEach((selector) => selector.id)] }
  );
}
