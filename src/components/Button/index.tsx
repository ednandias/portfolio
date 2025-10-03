import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, type ButtonHTMLAttributes } from "react";
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
  const containerRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    ["mouseenter", "mouseleave"].forEach((event) => {
      if (containerRef?.current) {
        containerRef.current.addEventListener(event, () => {
          gsap.to(containerRef.current, {
            scale: event === "mouseenter" ? 1.1 : 1,
            duration: 0.2,
          });
        });
      }
    });
  });

  return (
    <Container
      ref={containerRef}
      className={`${className} custom-button`}
      mt={mt}
      size={size}
      {...rest}
    >
      {icon && (
        <Icon iconName={icon} weight="duotone" color="#0d1b2a" size={20} />
      )}

      <p>{title}</p>
    </Container>
  );
}
