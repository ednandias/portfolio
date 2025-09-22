import styled from "styled-components";
import { toRem } from "../../utils/toRem";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  height: auto;

  background: #111d4a;
  background: linear-gradient(
    180deg,
    rgba(17, 29, 74, 1) 25%,
    rgba(0, 0, 0, 1) 100%
  );
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 50%;
  height: ${toRem(50)};
  margin: ${toRem(16)} auto;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  /* border: 1px solid rgba(255, 255, 255, 0.3); */

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
      font-weight: bold;
    }
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

  p {
    font-weight: 400;
    font-size: ${toRem(20)};
  }
`;

export const Presentation = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;
`;
