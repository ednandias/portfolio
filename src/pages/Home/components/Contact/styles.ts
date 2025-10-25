import styled from "styled-components";
import { toRem } from "../../../../utils/toRem";

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: ${toRem(40)};
  }
`;

export const Form = styled.section`
  min-width: 100%;
  height: 100%;
  padding: ${toRem(10)};
  gap: ${toRem(10)};

  display: grid;
  grid-template-columns: 20% auto auto;
`;

export const Info = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${toRem(10)};
`;

export const About = styled.article``;

export const Choose = styled.article``;
