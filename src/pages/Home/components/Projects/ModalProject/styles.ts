import styled from "styled-components";
import { toRem } from "../../../../../utils/toRem";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 25% auto;
`;

export const Info = styled.div`
  padding: ${toRem(20)};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${toRem(10)};

  div {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: ${toRem(20)};

    #platforms {
      display: flex;
      gap: ${toRem(5)};
    }
  }

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
  margin: 0 auto;
  max-width: ${toRem(900)};

  p {
    font-size: ${toRem(20)};
    line-height: 1.8;
    text-align: left;
    color: #e0e0e0;
    margin: 0;
  }

  p:first-child {
    font-weight: 500;
    margin-bottom: ${toRem(16)};
  }

  p + p {
    margin-top: ${toRem(16)};
  }

  strong {
    color: #ffffff;
    font-weight: 600;
  }
`;
