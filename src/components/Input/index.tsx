import { useState, type InputHTMLAttributes } from "react";
import { useTheme } from "styled-components";
import type { IconOptions } from "../../interfaces";
import { Icon } from "../Icon";
import { Tooltip } from "../Tooltip";
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

  console.log(error, icon);

  const theme = useTheme();

  return (
    <>
      <Container className={className} error={error}>
        <IconView>
          {icon && (
            <Icon
              iconName={icon}
              color={
                error ? theme.colors.danger : isFocused ? "#111d4a" : "#747172"
              }
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
          <Tooltip text={error}>
            <Icon iconName="Warning" size={24} color={theme.colors.danger} />
          </Tooltip>
        )}
      </Container>
    </>
  );
}
