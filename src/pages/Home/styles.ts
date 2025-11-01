import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const Container = styled.main`
  width: 100%;
  height: auto;

  overflow-x: hidden;
  position: relative;

  background: #111d4a;
  background: linear-gradient(
    180deg,
    rgba(17, 29, 74, 1) 25%,
    rgba(0, 0, 0, 1) 100%
  );
  background-attachment: fixed;

  display: flex;
  flex-direction: column;

  button#arrow-up {
    background: none;
    border: none;

    position: fixed;
    bottom: 0;
    right: 0;
    margin: ${toRem(20)};
  }
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
