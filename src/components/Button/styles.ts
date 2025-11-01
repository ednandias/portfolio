import styled from "styled-components";
import { toRem } from "../../utils/toRem";

interface ContainerProps {
  mt?: number;
  size?: "full";
}

export const Container = styled.button<ContainerProps>`
  min-width: ${toRem(150)};
  width: ${({ size }) => (size === "full" ? "100%" : "auto")};
  height: ${toRem(50)};
  padding: 0 ${toRem(20)};
  border-radius: 15px;

  background: #fcf7f8;
  color: #0d1b2a !important;
  font-size: ${toRem(16)};
  font-weight: bold;

  margin-top: ${({ mt }) => mt && toRem(mt)};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${toRem(5)};

  &:not(:disabled):hover {
    background: #2563eb;
    color: white !important;

    svg {
      fill: white !important;
    }
  }

  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.5);
  }
`;
