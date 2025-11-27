import { toRem } from "@utils/toRem";
import styled from "styled-components";

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SocialCardsView = styled.section`
  display: flex;
  gap: ${toRem(20)};
  margin-top: ${toRem(20)};
`;
