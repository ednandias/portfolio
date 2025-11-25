import { toRem } from "@utils/toRem";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Text = styled.h1`
  font-size: ${toRem(20)};
`;

export const Cursor = styled.div`
  width: ${toRem(10)};
  height: ${toRem(60)};
  background: ${({ theme }) => theme.colors.gold};
  animation: ${blink} 0.5s linear infinite alternate;
`;
