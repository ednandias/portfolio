import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, type ReactNode } from "react";
import { Container } from "./styles";

interface PopoverProps {
  children: ReactNode;
  text: string;
}

export function Popover({ children, text }: PopoverProps) {
  const [isVisible, setIsVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 1,
      });

      containerRef.current.addEventListener("mouseenter", () => {
        gsap.to(containerRef.current, {
          opacity: 1,
          content: text,
        });
      });

      containerRef.current.addEventListener("mouseleave", () => {
        gsap.to(containerRef.current, {
          opacity: 0,
        });
      });
    }
  }, []);

  return (
    <Container
      ref={containerRef}
      text={text}
      isVisible={isVisible}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
    </Container>
  );
}
