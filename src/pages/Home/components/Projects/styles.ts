import { isMobile } from "@utils/isMobile";
import styled, { css } from "styled-components";
import { toRem } from "../../../../utils/toRem";

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MyProjects = styled.div`
  display: flex;
  gap: ${toRem(20)};
  margin-top: ${toRem(20)};

  ${isMobile &&
  css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  `}
`;
