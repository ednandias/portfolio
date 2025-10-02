import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import type { IconOptions } from "../../interfaces";
import { Icon } from "../Icon";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: IconOptions;
  mt?: number;
  full?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ title, icon, mt, className, full, ...rest }, ref) => {
    useGSAP(() => {
      const button = document.querySelector("button");

      button?.addEventListener("mouseenter", () => {
        gsap.to(button, { scale: 1.1, duration: 0.2 });
      });

      button?.addEventListener("mouseleave", () => {
        gsap.to(button, { scale: 1, duration: 0.2 });
      });
    }, []);

    return (
      <Container
        className={`${className} custom-button`}
        ref={ref}
        mt={mt}
        full={full}
        {...rest}
      >
        {icon && (
          <Icon iconName={icon} weight="duotone" color="#0d1b2a" size={20} />
        )}

        <p>{title}</p>
      </Container>
    );
  }
);
