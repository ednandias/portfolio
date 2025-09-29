import styled from "styled-components";
import { toRem } from "../../../../utils/toRem";

export const Content = styled.div`
  flex: 1;

  display: grid;
  grid-template-columns: 70% 30%;
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${toRem(10)};

  align-items: center;
  padding: 0 ${toRem(40)};

  h1 {
    font-size: ${toRem(30)};
  }

  p {
    font-size: ${toRem(30)};
    text-align: justify;
    text-indent: 20px;
    text-transform: none;
    white-space: break-spaces;
    user-select: none;
  }
`;

export const Photo = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: ${toRem(300)};
    border-radius: ${toRem(40)};
  }
`;
