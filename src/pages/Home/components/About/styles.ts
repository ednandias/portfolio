import styled, { css } from "styled-components";
import { toRem } from "../../../../utils/toRem";

export const Content = styled.div`
  flex: 1;
  padding: ${toRem(20)};

  display: flex;
  flex-direction: column;
  justify-content: start;

  h1 {
    font-size: ${toRem(40)};
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const FormQuestions = styled.section`
  flex: 1;
  min-width: 100%;

  display: grid;
  grid-template-columns: 30% auto;
`;

export const Questions = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${toRem(10)};
`;

export const Question = styled.button<{ isSelected: boolean }>`
  height: ${toRem(50)};
  padding: ${toRem(10)};
  border-radius: ${toRem(10)};

  background: ${({ theme }) => theme.colors.text};

  display: flex;
  justify-content: flex-start;
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

  ${({ isSelected }) =>
    isSelected &&
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
  justify-content: flex-start;
`;

export const Answer = styled.p`
  text-align: start;
  text-indent: ${toRem(15)};
  font-weight: 300;
  font-size: ${toRem(25)};

  strong {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gold};
    font-style: italic;
  }
`;

export const Highlight = styled.span<{ color: string }>`
  color: ${({ color }) => color};
  font-weight: bold;
  font-style: italic;
`;

export const Info = styled.div`
  margin-bottom: ${toRem(10)};

  display: flex;
  align-items: center;
  gap: ${toRem(20)};
`;
