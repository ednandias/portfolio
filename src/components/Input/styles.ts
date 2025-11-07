import InputMask from "@mona-health/react-input-mask";
import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const Container = styled.div`
  width: 100%;
  height: ${toRem(50)};
  background: #fcf7f8;
  border-radius: 15px;
  position: relative;

  padding-right: ${toRem(20)};

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

export const StyledInput = styled(InputMask)`
  outline: 0;
  border: 0;
  background: inherit;
  flex: 1;
`;
