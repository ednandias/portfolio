import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const Container = styled.main`
  width: 100%;
  height: auto;

  position: relative;

  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  color: #fcf7f8;

  h1 {
    font-weight: 700;
    font-size: ${toRem(50)};
  }
`;

export const Config = styled.div`
  background: none;
  border: none;

  position: fixed;
  bottom: 0;
  right: 0;
  margin: ${toRem(20)};
`;
