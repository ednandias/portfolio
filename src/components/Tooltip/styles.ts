import styled, { css } from "styled-components";

interface TextProps {
  direction?: "bottom";
}

export const Text = styled.span<TextProps>`
  ${({ direction }) =>
    direction === "bottom"
      ? css`
          display: none;
          width: 120px;
          background-color: black;
          color: #ffffff;
          text-align: center;
          border-radius: 6px;
          padding: 5px 0;
          position: absolute;
          z-index: 1;
          top: 110%;
          left: 50%;
          margin-left: -60px;
          font-size: 14px;

          &::after {
            content: "";
            position: absolute;
            bottom: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent black transparent;
          }
        `
      : css`
          display: none;
          width: 120px;
          background-color: black;
          color: #ffffff;
          text-align: center;
          border-radius: 6px;
          padding: 5px 0;
          position: absolute;
          z-index: 1;
          bottom: 120%;
          left: 50%;
          margin-left: -60px;
          font-size: 14px;

          &::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: black transparent transparent transparent;
          }
        `}
`;

export const Container = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover ${Text} {
    display: inline;
  }
`;
