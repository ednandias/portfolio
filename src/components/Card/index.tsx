import { Icon } from "@components/Icon";
import type { IconOptions } from "@interfaces/index";
import { type ButtonHTMLAttributes } from "react";
import { useTheme } from "styled-components";
import { Container } from "./styles";

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  imgUrl?: string;
  size?: number;
  imagesize?: number;
  noGlass?: boolean;
  backColor?: string;
  icon?: IconOptions;
}

export function Card({
  imgUrl,
  size,
  imagesize,
  noGlass,
  backColor,
  icon,
  ...rest
}: CardProps) {
  const theme = useTheme();

  return (
    <Container
      className="card"
      size={size}
      imagesize={imagesize}
      $noGlass={noGlass}
      $backColor={backColor}
      {...rest}
    >
      {imgUrl && <img src={imgUrl} />}
      {icon && (
        <Icon
          iconName={icon}
          size={22}
          weight="duotone"
          color={theme.colors.gold}
        />
      )}
    </Container>
  );
}
