import InputMask from "@mona-health/react-input-mask";
import styled, { css } from "styled-components";
import { toRem } from "../../utils/toRem";

interface ContainerProps {
  hasError?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: ${toRem(50)};
  background: #fcf7f8;
  border-radius: 15px;

  padding-right: ${toRem(20)};

  display: flex;
  align-items: center;

  ${({ hasError }) =>
    hasError &&
    css`
      outline: 2px solid ${({ theme }) => theme.colors.warn};
    `}
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

export const ErrorSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${toRem(5)};
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.warn};
`;
