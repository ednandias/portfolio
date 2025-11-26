import { isMobile } from "@utils/isMobile";
import styled, { css } from "styled-components";
import { toRem } from "../../../../../utils/toRem";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 25% auto;

  ${isMobile &&
  css`
    all: unset;
    display: flex;
    flex-direction: column;
  `}
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
  padding: ${toRem(20)};
  gap: ${toRem(20)};

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

  ${isMobile &&
  css`
    p {
      font-size: ${toRem(15)};
      text-align: justify;
      text-align-last: auto;
      hyphens: auto;
      word-break: break-word;
      overflow-wrap: break-word;
    }
  `}
`;
