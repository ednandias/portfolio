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

  /* background: #1b263b; */
  background-color: #fcf7f8;

  margin-top: ${({ mt }) => mt && toRem(mt)};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${toRem(5)};

  transition: background-color 0.4s;

  &:hover {
    background: #30bced;
    background: linear-gradient(
      270deg,
      rgba(48, 188, 237, 1) 20%,
      rgba(37, 99, 235, 1) 80%
    );

    p {
      color: #fffaff !important;
      transition: color 0.4s;
    }

    svg {
      fill: #fffaff !important;
      transition: fill 0.4s;
    }
  }

  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.5);
  }

  p {
    color: #0d1b2a !important;
    font-size: ${toRem(16)};
    font-weight: bold;
  }
`;
