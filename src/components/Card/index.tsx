import type { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  imgUrl: string;
}

export function Card({ imgUrl, ...rest }: CardProps) {
  return (
    <Container className="card" {...rest}>
      <img src={imgUrl} />
    </Container>
  );
}
