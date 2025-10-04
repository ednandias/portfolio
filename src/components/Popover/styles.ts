import styled from "styled-components";

interface ContainerProps {
  isVisible?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9999;
`;

export const Popup = styled.span`
  width: auto;
  min-width: max-content;
  height: auto;
  z-index: 9999;

  background: ${({ theme }) => theme.colors.fonts};
  padding: 10px;
  border-radius: 16px;
  position: absolute;
  top: -35px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
