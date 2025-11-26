import { toRem } from "@utils/toRem";
import styled from "styled-components";

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SocialCard = styled.article`
  width: ${toRem(200)};
  height: ${toRem(240)};
  border-radius: ${toRem(16)};

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

export const IconView = styled.div<{ color: string }>`
  background: ${({ color }) => color};

  display: flex;
  align-items: center;
  justify-content: center;

  border-top-left-radius: ${toRem(16)};
  border-top-right-radius: ${toRem(16)};
`;

export const SocialContent = styled.div`
  padding: ${toRem(20)};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${toRem(10)};

  p {
    font-weight: bold;
  }
`;
