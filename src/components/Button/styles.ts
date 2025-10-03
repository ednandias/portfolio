import styled from "styled-components";
import { toRem } from "../../utils/toRem";

interface ContainerProps {
  mt?: number;
  size?: "full";
}

export const Container = styled.button<ContainerProps>`
  width: auto;
  min-width: ${({ size }) => (size === "full" ? "100%" : toRem(150))};

  height: ${toRem(50)};
  padding: 0 ${toRem(20)};

  /* background: #1b263b; */
  background: #fcf7f8;
  border-radius: 15px;

  margin-top: ${({ mt }) => mt && toRem(mt)};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${toRem(5)};

  p {
    color: #0d1b2a !important;
    font-size: ${toRem(16)};
    font-weight: bold;
  }

  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.5);
  }
`;
