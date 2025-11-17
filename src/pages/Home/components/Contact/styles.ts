import styled, { css } from "styled-components";
import { toRem } from "../../../../utils/toRem";

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: ${toRem(40)};
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const Form = styled.section`
  min-width: ${toRem(450)};
  height: 100%;
  padding: ${toRem(20)};
  margin-top: ${toRem(20)};

  display: flex;
  flex-direction: column;
  gap: ${toRem(10)};
  background: red;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  p {
    text-align: center;
  }
`;

export const Info = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${toRem(10)};
`;

export const ButtonSelect = styled.button<{ selected: boolean }>`
  min-width: ${toRem(150)};
  width: 100%;
  height: ${toRem(50)};
  padding: 0 ${toRem(20)};
  border-radius: 15px;

  background: #fcf7f8;
  color: #0d1b2a !important;
  font-size: ${toRem(16)};
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${toRem(5)};

  input {
    cursor: pointer;
  }

  ${({ selected }) =>
    selected &&
    css`
      background: ${({ theme }) => theme.colors.primaryDarker};
      color: ${({ theme }) => theme.colors.text} !important;

      svg {
        fill: ${({ theme }) => theme.colors.text} !important;
      }
    `}
`;
