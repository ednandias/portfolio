import styled, { css } from "styled-components";
import { toRem } from "../../utils/toRem";

interface ContainerProps {
  size?: number;
  $imageSize?: number;
  $noGlass?: boolean;
  $backColor?: string;
}

export const Container = styled.button<ContainerProps>`
  width: ${({ size }) => toRem(size ? size : 150)};
  height: ${({ size }) => toRem(size ? size : 150)};
  border-radius: ${toRem(16)};
  background: ${({ $backColor }) => $backColor};

  ${({ $noGlass }) =>
    !$noGlass &&
    css`
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    `}

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: ${({ $imageSize }) => toRem($imageSize ? $imageSize : 100)};
  }
`;
