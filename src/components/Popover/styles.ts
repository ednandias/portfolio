import styled, { css } from "styled-components";

interface ContainerProps {
  text?: string;
  isVisible?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  /* &::before {
    width: auto;
    height: auto;
    background: ${({ theme }) => theme.colors.fonts};
    padding: 10px;
    border-radius: 16px;
    position: absolute;
    top: -30px;
  } */
`;
