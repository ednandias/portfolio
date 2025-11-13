import { type ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  imgUrl: string;
  size?: number;
  imagesize?: number;
  noGlass?: boolean;
  backColor?: string;
}

export function Card({
  imgUrl,
  size,
  imagesize,
  noGlass,
  backColor,
  ...rest
}: CardProps) {
  return (
    <Container
      className="card"
      size={size}
      imagesize={imagesize}
      $noGlass={noGlass}
      $backColor={backColor}
      {...rest}
    >
      <img src={imgUrl} />
    </Container>
  );
}
