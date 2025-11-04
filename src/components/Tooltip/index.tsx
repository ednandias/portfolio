import type { ReactNode } from "react";
import { Container, Text } from "./styles";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export function Tooltip({ text, children }: TooltipProps) {
  return (
    <Container>
      {children}
      <Text>{text}</Text>
    </Container>
  );
}
