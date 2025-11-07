import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, type ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  imgUrl: string;
  size?: number;
  imagesize?: number;
  noAnimate?: boolean;
  animation?: "slide-up" | "rotate";
  noGlass?: boolean;
  backColor?: string;
}

export function Card({
  imgUrl,
  size,
  imagesize,
  animation,
  noAnimate,
  noGlass,
  backColor,
  ...rest
}: CardProps) {
  const containerRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    if (!noAnimate) {
      ["mouseenter", "mouseleave"].forEach((mouseEvent) => {
        if (containerRef.current) {
          containerRef.current.addEventListener(mouseEvent, () => {
            switch (animation) {
              case "slide-up": {
                gsap.to(containerRef.current, {
                  y: mouseEvent === "mouseenter" ? -10 : 0,
                });

                break;
              }

              case "rotate": {
                gsap.to(containerRef.current, {
                  rotate: mouseEvent === "mouseenter" ? 360 : 0,
                });

                break;
              }
            }
          });
        }
      });
    }
  });

  return (
    <Container
      ref={containerRef}
      className="card"
      size={size}
      imagesize={imagesize}
      noGlass={noGlass}
      backColor={backColor}
      {...rest}
    >
      <img src={imgUrl} />
    </Container>
  );
}
