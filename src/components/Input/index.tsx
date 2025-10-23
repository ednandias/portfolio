import { useState, type InputHTMLAttributes } from "react";
import type { IconOptions } from "../../interfaces";
import { Icon } from "../Icon";
import { Container, IconView, StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconOptions;
  mask?: string;
}

export function Input({ icon, mask, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <IconView>
        {icon && (
          <Icon
            iconName={icon}
            color={isFocused ? "#111d4a" : "#747172"}
            size={30}
          />
        )}
      </IconView>

      <StyledInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
    </Container>
  );
}
