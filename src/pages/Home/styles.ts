import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const Container = styled.main`
  width: 100%;
  height: auto;

  overflow-x: hidden;
  position: relative;

  background: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.colors.primary} 0%, rgba(102, 28, 212, 1) 100%);`};
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  flex: 1;
  height: 100vh;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  color: #fcf7f8;

  h1 {
    font-weight: 700;
    font-size: ${toRem(50)};
    margin-bottom: ${toRem(10)};
  }
`;

export const Config = styled.div`
  background: none;
  border: none;
  background: red;

  position: fixed;
  bottom: 0;
  right: 0;
  margin: ${toRem(20)};
`;
