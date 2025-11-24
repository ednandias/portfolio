import Tippy from "@tippyjs/react";
import { useState, type InputHTMLAttributes } from "react";
import { useTheme } from "styled-components";
import type { IconOptions } from "../../interfaces";
import { Icon } from "../Icon";
import { Container, IconView, StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconOptions;
  mask?: string | (string | RegExp)[];
  error?: string;
}

export function Input({
  icon,
  mask = "",
  className,
  error,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const theme = useTheme();

  return (
    <>
      <Container className={className}>
        <IconView>
          {icon && (
            <Icon
              iconName={icon}
              color={isFocused ? "#111d4a" : "#747172"}
              size={25}
            />
          )}
        </IconView>

        <StyledInput
          mask={mask}
          alwaysShowMask={false}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          error={error}
          {...rest}
        />

        {error && (
          <Tippy content={error}>
            <Icon iconName="Warning" size={24} color={theme.colors.danger} />
          </Tippy>
        )}
      </Container>
    </>
  );
}
