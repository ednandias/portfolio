import styled, { css } from "styled-components";
import { toRem } from "../../utils/toRem";

export interface ContainerProps {
  size?: "md" | "lg";
  autoSize?: boolean;
}

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const Container = styled.div<ContainerProps>`
  ${({ autoSize, size }) =>
    autoSize
      ? css`
          width: auto;
          height: auto;
        `
      : css`
          min-width: ${size === "md" ? "75%" : size === "lg" ? "95%" : "55%"};
          min-height: ${size === "md" ? "75%" : size === "lg" ? "95%" : "55%"};
          max-height: ${size === "md" ? "75%" : size === "lg" ? "95%" : "55%"};
        `}

  height: auto;
  border-radius: ${toRem(20)};
  background: #111d4a;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const Header = styled.div`
  width: 100%;
  padding: ${toRem(5)};

  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    background: none;
    outline: none;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
`;
