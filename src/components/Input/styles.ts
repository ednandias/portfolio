import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const Container = styled.div`
  min-width: ${toRem(300)};
  width: auto;
  height: ${toRem(50)};
  background: #fcf7f8;
  border-radius: 15px;

  display: flex;
  align-items: center;
`;

export const IconView = styled.div`
  width: ${toRem(50)};
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled.input`
  outline: 0;
  border: 0;
  background: inherit;
`;
