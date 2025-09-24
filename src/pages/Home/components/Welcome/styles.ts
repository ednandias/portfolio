import styled from "styled-components";
import { toRem } from "../../../../utils/toRem";

export const Presentation = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;
`;

export const Header = styled.header`
  width: 50%;
  height: ${toRem(50)};
  margin: ${toRem(16)} auto;

  position: fixed;
  left: 0;
  right: 0;
  z-index: 9999;

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
