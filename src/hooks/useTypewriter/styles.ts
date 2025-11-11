import styled, { keyframes } from "styled-components";

const blink = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1;
  }
`;

export const Cursor = styled.div`
  width: 5px;
  height: 24px;
  background: white;
  animation: ${blink} 0.5s linear infinite alternate;
`;
