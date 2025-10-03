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
    font-size: ${toRem(20)};
  }

  a {
    width: 100%;
  }
`;

export const Techs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  gap: ${toRem(10)};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${toRem(10)};
  padding: ${toRem(20)};

  p {
    font-size: ${toRem(20)};
    text-align: justify;
    text-indent: 20px;
    text-transform: none;
    white-space: break-spaces;
    user-select: none;
  }
`;
