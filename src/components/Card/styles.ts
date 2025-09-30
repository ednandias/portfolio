import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const Container = styled.button`
  width: ${toRem(150)};
  height: ${toRem(150)};

  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: ${toRem(100)};
  }
`;
