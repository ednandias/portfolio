import { useState, type TextareaHTMLAttributes } from "react";
import type { IconName } from "../../interfaces";
import { Icon } from "../Icon";
import { Container, IconView, StyledTextArea } from "./styles";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: IconName;
  mask?: string | (string | RegExp)[];
}

export function TextArea({ icon, className, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container className={className}>
      <IconView>
        {icon && (
          <Icon
            name={icon}
            color={isFocused ? "#111d4a" : "#747172"}
            size={25}
          />
        )}
      </IconView>

      <StyledTextArea
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        rows={5}
        {...rest}
      />
    </Container>
  );
}
