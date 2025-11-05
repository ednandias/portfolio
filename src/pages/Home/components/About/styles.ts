import styled from "styled-components";
import { toRem } from "../../../../utils/toRem";

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 ${toRem(40)};

  h1 {
    font-size: ${toRem(40)};
    color: ${({ theme }) => theme.colors.gold};
  }

  p {
    font-size: ${toRem(20)};
    text-align: justify;
    text-indent: 20px;
    text-transform: none;
    white-space: break-spaces;
  }
`;
