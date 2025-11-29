import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const Container = styled.main`
  width: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  min-height: 100vh;
  padding: ${toRem(20)};

  display: flex;
  flex-direction: column;

  overflow-x: hidden !important;
  color: #fcf7f8;

  h1 {
    font-weight: 700;
    font-size: ${toRem(50)};
  }
`;

export const Content = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FallbackLoading = styled.span`
  width: ${toRem(100)};
  height: ${toRem(100)};
  background: linear-gradient(
    165deg,
    rgba(255, 255, 255, 1) 0%,
    rgb(220, 220, 220) 40%,
    rgb(170, 170, 170) 98%,
    rgb(10, 10, 10) 100%
  );
  border-radius: 50%;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border-bottom: 0 solid #ffffff05;
    box-shadow: 0 -10px 20px 20px #ffffff40 inset,
      0 -5px 15px 10px #ffffff50 inset, 0 -2px 5px #ffffff80 inset,
      0 -3px 2px #ffffffbb inset, 0 2px 0px #ffffff, 0 2px 3px #ffffff,
      0 5px 5px #ffffff90, 0 10px 15px #ffffff60, 0 10px 20px 20px #ffffff40;
    filter: blur(3px);
    animation: 2s rotate linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;
