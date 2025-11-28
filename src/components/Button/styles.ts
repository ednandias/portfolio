import styled, { css } from "styled-components";
import { toRem } from "../../utils/toRem";

interface ContainerProps {
  mt?: number;
  size?: "full";
  color?: string;
  $textColor?: string;
  $noHoverAnimation?: boolean;
}

export const Container = styled.button<ContainerProps>`
  min-width: ${toRem(150)};
  width: ${({ size }) => (size === "full" ? "100%" : "auto")};
  height: ${toRem(50)};
  padding: 0 ${toRem(20)};
  border-radius: 15px;
  font-size: ${toRem(16)};
  font-weight: 700;
  margin-top: ${({ mt }) => mt && toRem(mt)};

  background: ${({ color }) => color || "#fcf7f8"};
  color: ${({ $textColor }) => $textColor || "#0d1b2a"} !important;

  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${toRem(5)};

  ${({ $noHoverAnimation }) =>
    !$noHoverAnimation &&
    css`
      &:not(:disabled):hover {
        background: ${({ theme }) => theme.colors.primaryDarker};
        color: ${({ theme }) => theme.colors.gold} !important;

        svg {
          fill: ${({ theme }) => theme.colors.gold} !important;
        }
      }
    `}

  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.5);
  }
`;
