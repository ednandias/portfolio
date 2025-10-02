import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  imgUrl: string;
  size?: number;
  imageSize?: number;
  noAnimate?: boolean;
}

export function Card({
  imgUrl,
  size,
  imageSize,
  noAnimate,
  ...rest
}: CardProps) {
  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLButtonElement>(".card");

    for (const card of cards) {
      ["mouseenter", "mouseleave"].forEach((mouseEvent) => {
        card.addEventListener(mouseEvent, () => {
          if (noAnimate) {
            return;
          }

          gsap.to(card, {
            scale: mouseEvent === "mouseenter" ? 1.1 : 1,
            duration: 0.1,
          });
        });
      });
    }
  });

  return (
    <Container className="card" size={size} imageSize={imageSize} {...rest}>
      <img src={imgUrl} />
    </Container>
  );
}
