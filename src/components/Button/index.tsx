import { type ButtonHTMLAttributes } from "react";
import type { IconOptions } from "../../interfaces";
import { Icon } from "../Icon";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: IconOptions;
  mt?: number;
  size?: "full";
}

export function Button({
  title,
  icon,
  mt,
  className = "",
  size,
  ...rest
}: ButtonProps) {
  return (
    <Container
      className={`${className} custom-button`}
      mt={mt}
      size={size}
      {...rest}
    >
      {icon && (
        <Icon iconName={icon} weight="duotone" color="#0d1b2a" size={20} />
      )}

      {title}
    </Container>
  );
}
