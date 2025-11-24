import styled from "styled-components";
import { toRem } from "../../../../../utils/toRem";

export const Container = styled.div`
  flex: 1;

  display: grid;
  grid-template-columns: 25% auto;
`;

export const Info = styled.div`
  padding: ${toRem(20)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${toRem(10)};

  h1 {
    font-size: ${toRem(18)};
    text-align: center;
    color: ${({ theme }) => theme.colors.gold};
  }

  a {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${toRem(20)};
  padding: ${toRem(30)} ${toRem(40)};
  max-width: 700px;
  margin: 0 auto;

  p {
    font-size: ${toRem(17)};
    line-height: 1.6;
    text-align: justify;
    text-transform: none;
    text-indent: 0;
  }

  p + p {
    margin-top: ${toRem(12)};
  }
`;
