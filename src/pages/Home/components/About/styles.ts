import { isMobile } from "@utils/isMobile";
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

  ${isMobile &&
  css`
    display: flex;
    flex-direction: column;
    gap: ${toRem(20)};
  `}
`;

export const Questions = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${toRem(10)};

  ${isMobile &&
  css`
    all: unset;
    margin-top: ${toRem(20)};
    display: grid;
    grid-template-columns: repeat(6, auto);
    gap: ${toRem(10)};
  `}
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

  ${isMobile &&
  css`
    justify-content: center;
  `}
`;

export const Answers = styled.article`
  width: 100%;
  padding: 0 ${toRem(20)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${isMobile &&
  css`
    padding: 0;
  `}
`;

export const Answer = styled.p`
  text-align: left;
  font-weight: 300;
  font-size: ${toRem(30)};

  ${isMobile &&
  css`
    all: unset;
    font-size: ${toRem(18)};
    text-align: justify;
    text-align-last: auto;
    hyphens: auto;
    word-break: break-word;
    overflow-wrap: break-word;
  `}
`;

export const QuestionMobile = styled.h2`
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: ${toRem(20)};
`;
