import { toRem } from "@utils/toRem";
import styled, { css } from "styled-components";

export const Container = styled.article`
  width: ${toRem(200)};
  height: ${toRem(240)};
  border-radius: ${toRem(16)};

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  user-select: none;

  display: grid;
  grid-template-rows: repeat(2, 1fr);

  cursor: pointer;
`;

export const IconView = styled.div<{ $iconViewColor?: string }>`
  ${({ $iconViewColor }) =>
    $iconViewColor &&
    css`
      background: ${$iconViewColor};

      border-top-left-radius: ${toRem(16)};
      border-top-right-radius: ${toRem(16)};
    `}

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div<{
  $contentColor?: string;
  $contentTextColor?: string;
}>`
  ${({ $contentColor }) =>
    $contentColor &&
    css`
      background: ${$contentColor};
      border-bottom-left-radius: ${toRem(16)};
      border-bottom-right-radius: ${toRem(16)};
    `}

  padding: ${toRem(20)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${toRem(10)};

  p {
    font-weight: 700;
    color: ${({ $contentTextColor }) => $contentTextColor || "#fff"};
  }
`;
