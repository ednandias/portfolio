import styled from "styled-components";
import { toRem } from "../../../../utils/toRem";

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 ${toRem(40)};

  h1 {
    font-size: ${toRem(40)};
    color: ${({ theme }) => theme.colors.mainTitle};
  }
`;

export const Question = styled.h3`
  font-size: ${toRem(30)};
`;

export const Answer = styled.p`
  font-size: ${toRem(20)};
`;
