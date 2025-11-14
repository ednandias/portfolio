import styled, { css } from "styled-components";
import { toRem } from "../../../../utils/toRem";

export const Content = styled.div`
  flex: 1;
  padding: ${toRem(20)};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormQuestions = styled.section`
  flex: 1;
  min-width: 100%;

  display: grid;
  grid-template-columns: auto auto;
`;

export const Questions = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${toRem(10)};
`;

export const Question = styled.button<{ $isSelected: boolean }>`
  width: auto;
  height: ${toRem(50)};
  padding: ${toRem(10)};
  border-radius: ${toRem(16)};

  background: ${({ theme }) => theme.colors.text};

  display: flex;
  align-items: center;
  gap: ${toRem(5)};

  opacity: 0.4;
  transition: opacity 0.7s;

  &:hover {
    opacity: 1;
  }

  p {
    font-size: ${toRem(20)};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      opacity: 1;
      background: ${({ theme }) => theme.colors.primaryDarker};

      p {
        color: ${({ theme }) => theme.colors.gold};
      }

      svg {
        fill: ${({ theme }) => theme.colors.gold};
      }
    `}
`;

export const Answers = styled.article`
  width: 100%;
  padding: 0 ${toRem(20)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Answer = styled.p`
  text-align: center;
  text-indent: ${toRem(15)};
  font-weight: 300;
  font-size: ${toRem(30)};

  strong {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gold};
    font-style: italic;
  }
`;
