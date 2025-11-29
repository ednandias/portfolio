import { Icon } from "@components/Icon";
import type { IconName } from "@interfaces/index";
import { type ButtonHTMLAttributes } from "react";
import { useTheme } from "styled-components";
import { Container } from "./styles";

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  imgUrl?: string;
  alt?: string;
  size?: number;
  imageSize?: number;
  noGlass?: boolean;
  backColor?: string;
  icon?: IconName;
}

export function Card({
  imgUrl,
  alt,
  size,
  imageSize,
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
      $imageSize={imageSize}
      $noGlass={noGlass}
      $backColor={backColor}
      {...rest}
    >
      {imgUrl && <img src={imgUrl} alt={alt} />}

      {icon && (
        <Icon
          name={icon}
          size={22}
          weight="duotone"
          color={theme.colors.gold}
        />
      )}
    </Container>
  );
}
