import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const Container = styled.div`
  width: auto;
  min-width: 95%;

  height: auto;
  max-height: 90%;

  border-radius: ${toRem(20)};
  background: #111d4a;

  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const Header = styled.div`
  width: 100%;
  padding: ${toRem(5)};

  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    background: none;
    outline: none;
  }
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
`;
