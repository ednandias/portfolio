import { useState, type InputHTMLAttributes } from "react";
import { useTheme } from "styled-components";
import type { IconOptions } from "../../interfaces";
import { Icon } from "../Icon";
import {
  Container,
  ErrorMessage,
  ErrorSection,
  IconView,
  StyledInput,
} from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconOptions;
  mask?: string | (string | RegExp)[];
  error?: string;
}

export function Input({ icon, mask = "", error, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const theme = useTheme();

  return (
    <>
      <Container hasError={!!error}>
        <IconView>
          {icon && (
            <Icon
              iconName={icon}
              color={
                !!error ? theme.colors.warn : isFocused ? "#111d4a" : "#747172"
              }
              size={25}
            />
          )}
        </IconView>

        <StyledInput
          mask={mask}
          maskChar=""
          alwaysShowMask={false}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
      </Container>

      {error && (
        <ErrorSection>
          <Icon iconName="Warning" size={22} color={theme.colors.warn} />

          <ErrorMessage>{error}</ErrorMessage>
        </ErrorSection>
      )}
    </>
  );
}
