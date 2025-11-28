import { type ButtonHTMLAttributes } from "react";
import type { IconName } from "../../interfaces";
import { Icon } from "../Icon";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: IconName;
  mt?: number;
  size?: "full";
  color?: string;
  textColor?: string;
  iconColor?: string;
  noHoverAnimation?: boolean;
}

export function Button({
  title,
  icon,
  mt,
  color,
  textColor,
  iconColor,
  className = "",
  size,
  noHoverAnimation,
  ...rest
}: ButtonProps) {
  return (
    <Container
      className={`${className} custom-button`}
      mt={mt}
      size={size}
      color={color}
      $textColor={textColor}
      $noHoverAnimation={noHoverAnimation}
      {...rest}
    >
      {icon && (
        <Icon
          name={icon}
          weight="duotone"
          color={iconColor || "#0d1b2a"}
          size={20}
        />
      )}

      {title}
    </Container>
  );
}
