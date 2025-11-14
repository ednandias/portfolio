import { toRem } from "@utils/toRem";
import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-size: ${toRem(40)};
  color: ${({ theme }) => theme.colors.gold};
`;

export const StyledParagraph = styled.p`
  font-size: ${toRem(20)};
`;
