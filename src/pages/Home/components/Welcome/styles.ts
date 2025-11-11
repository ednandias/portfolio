import styled from "styled-components";
import { toRem } from "../../../../utils/toRem";

export const Presentation = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${toRem(10)};

  color: white;

  h1 {
    margin: 0;
    color: ${({ theme }) => theme.colors.mainTitle};
  }

  p {
    font-weight: 300;
    font-size: ${toRem(20)};

    span {
      /* background: red; */
      display: flex;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${toRem(10)};

  p {
    font-weight: 300;
    font-size: ${toRem(20)};
  }

  div {
    display: flex;
    gap: 5px;
  }
`;

export const Divider = styled.article`
  width: ${toRem(3)};
  height: ${toRem(24)};
  background: white;
`;

export const Header = styled.header`
  width: 50%;
  height: ${toRem(50)};
  margin: ${toRem(16)} auto;

  position: fixed;
  left: 0;
  right: 0;
  z-index: 999;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

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
      color: ${({ theme }) => theme.colors.headerAnchors};
    }
  }
`;

export const ButtonsView = styled.div`
  display: flex;
  gap: ${toRem(10)};
`;
