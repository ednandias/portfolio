import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, type ReactNode } from "react";
import { Container, Popup } from "./styles";

interface PopoverProps {
  children: ReactNode;
  text: string;
}

export function Popover({ children, text }: PopoverProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (containerRef.current) {
      const child = containerRef.current?.firstChild;

      gsap.set(popupRef.current, {
        opacity: 0,
      });

      ["mouseenter", "mouseleave"].forEach((event) => {
        child?.addEventListener(event, () => {
          gsap.to(popupRef.current, {
            opacity: event === "mouseenter" ? 1 : 0,
            y: event === "mouseenter" ? -10 : 0,
          });
        });
      });
    }
  }, []);

  return (
    <Container ref={containerRef}>
      {children}

      <Popup ref={popupRef}>{text}</Popup>
    </Container>
  );
}
