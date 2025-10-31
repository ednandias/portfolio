import styled from "styled-components";
import { Button } from "../../../../components/Button";
import { toRem } from "../../../../utils/toRem";

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: ${toRem(40)};
  }
`;

export const Form = styled.section`
  min-width: ${toRem(450)};
  height: 100%;
  padding: ${toRem(20)};

  display: flex;
  flex-direction: column;
  gap: ${toRem(10)};
  background: red;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

export const Info = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${toRem(10)};
`;

export const ButtonSelect = styled(Button)`
  &:hover {
    background-color: #fcf7f8;

    p {
      color: #0d1b2a !important;
      transition: none;
    }

    svg {
      fill: #0d1b2a !important;
      transition: none;
    }
  }
`;
