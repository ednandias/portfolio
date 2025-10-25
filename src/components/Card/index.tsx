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
}

export function Card({
  imgUrl,
  size,
  imagesize,
  animation,
  noAnimate,
  ...rest
}: CardProps) {
  const containerRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    ["mouseenter", "mouseleave"].forEach((mouseEvent) => {
      if (containerRef.current) {
        containerRef.current.addEventListener(mouseEvent, () => {
          if (noAnimate) {
            return;
          }

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
  }, []);

  return (
    <Container
      ref={containerRef}
      className="card"
      size={size}
      imagesize={imagesize}
      {...rest}
    >
      <img src={imgUrl} />
    </Container>
  );
}
