import styled from "styled-components";
import { toRem } from "../../../../../utils/toRem";

export const Container = styled.div`
  flex: 1;

  display: grid;
  grid-template-columns: 25% 50% 25%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${toRem(10)};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${toRem(10)};

  p {
    font-size: ${toRem(20)};
    text-align: justify;
    text-indent: 20px;
    text-transform: none;
    white-space: break-spaces;
    user-select: none;
  }
`;

export const Visit = styled.div``;
