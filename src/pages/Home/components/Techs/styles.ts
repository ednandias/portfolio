import { isMobile } from "@utils/isMobile";
import { toRem } from "@utils/toRem";
import styled, { css } from "styled-components";

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TechsView = styled.div`
  width: 100%;
  padding: ${toRem(20)};

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${toRem(20)};

  ${isMobile &&
  css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  `}
`;
