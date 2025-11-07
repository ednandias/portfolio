import type { ReactNode } from "react";
import { Container, Text } from "./styles";

interface TooltipProps {
  text: string;
  direction?: "bottom";
  children: ReactNode;
}

export function Tooltip({ text, direction, children }: TooltipProps) {
  return (
    <Container>
      {children}
      <Text direction={direction}>{text}</Text>
    </Container>
  );
}
