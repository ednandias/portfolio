import { toRem } from "@utils/toRem";
import styled, { keyframes } from "styled-components";

interface TextProps {
  color?: string;
  fontSize?: number;
}

const blink = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Text = styled.p<TextProps>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) =>
    fontSize ? toRem(fontSize) : toRem(20)} !important;
`;

export const Cursor = styled.div`
  width: ${toRem(5)};
  height: ${toRem(25)};
  background: white;
  animation: ${blink} 0.5s linear infinite alternate;
`;
