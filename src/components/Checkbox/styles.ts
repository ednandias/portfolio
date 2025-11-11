import styled from "styled-components";

export const Container = styled.input`
  /* Caixa para o marcador */
  appearance: none;
  position: relative;
  /* Tamanho */
  width: 1.125rem;
  height: 1.125rem;
  /* Cor do fundo e borda */
  background-color: #fff;
  border: 0.125rem solid #ccc;
  border-radius: 0.25rem;

  &::before {
    content: "";
    /* Posicionar no meio */
    position: absolute;
    top: 50%;
    left: 50%;
    /* Tamanho do marcador */
    width: 0.75rem;
    height: 0.75rem;
    /* Formato do marcador */
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    /* Posicionar no meio */
    transform: translate(-50%, -50%) scale(0);
    transform-origin: center;
    transition: 0.125s transform ease-in-out;
    /* Cor do marcador */
    box-shadow: inset 1rem 1rem #111d4a;
  }

  /* Cor da caixa para o marcador */
  &:checked {
    background-color: ${({ theme }) => theme.colors.gold};
    border-color: ${({ theme }) => theme.colors.gold};
  }

  /* Características do marcador quando selecionado */
  &:checked::before {
    transform: translate(-50%, -50%) scale(1);
  }

  /* Características do marcador quando selecionado */
  &:disabled {
    opacity: 0.25;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.gold};
  }

  &:focus + label {
    color: ${({ theme }) => theme.colors.gold};
  }
`;
