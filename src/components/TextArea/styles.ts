import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const Container = styled.div`
  min-width: ${toRem(300)};
  width: auto;
  height: 100%;
  background: #fcf7f8;
  border-radius: 15px;

  display: flex;
`;

export const IconView = styled.div`
  padding: ${toRem(10)};
  width: ${toRem(50)};
  height: 100%;

  display: flex;
  justify-content: center;
`;

export const StyledTextArea = styled.textarea`
  min-height: 100%;
  padding: ${toRem(10)};

  outline: 0;
  border: 0;
  background: inherit;

  border-radius: 15px;

  resize: none;

  flex: 1;
`;
