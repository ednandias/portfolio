import InputMask from "@mona-health/react-input-mask";
import { type InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { toRem } from "../../utils/toRem";

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

interface ContainerProps {
  error?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: ${toRem(50)};
  background: #fcf7f8;
  border-radius: 15px;
  position: relative;

  padding-right: ${toRem(20)};

  display: flex;
  align-items: center;

  ${({ error }) =>
    error &&
    css`
      outline: 2px solid red;
    `}
`;

export const IconView = styled.div`
  width: ${toRem(50)};
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled(InputMask)<StyledInputProps>`
  outline: 0;
  border: 0;
  background: inherit;
  flex: 1;
`;
