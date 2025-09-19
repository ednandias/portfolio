import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const Container = styled.main`
  width: 100%;
  height: 100%;

  overflow: hidden;

  background: #000000;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(13, 27, 42, 1) 100%
  );

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 50%;
  height: ${toRem(50)};

  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.5);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.125);

  margin: ${toRem(10)} auto;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: ${toRem(5)};

  article {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${toRem(5)};

    p {
      color: #fcf7f8;
      font-weight: bold;
    }
  }
`;

export const Content = styled.section`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fcf7f8;
    font-weight: 700;
    font-size: ${toRem(50)};
    margin-bottom: ${toRem(10)};
  }

  p {
    color: #fcf7f8;
    font-weight: 400;
    font-size: ${toRem(20)};
  }
`;
