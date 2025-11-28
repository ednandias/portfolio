import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

   @font-face {
    font-family: "Montserrat";
    src: url("/fonts/Montserrat-Light.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("/fonts/Montserrat-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("/fonts/Montserrat-Medium.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

   @font-face {
    font-family: "Montserrat";
    src: url("/fonts/Montserrat-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    overflow-y: visible !important;
  }

  html, body, div#root {
    min-height: 100vh;
  }

  body, button, input, textarea, select {
    font-size: 1rem;
    font-family: "Montserrat", sans-serif;
  }

  div#root {
    background-image: url("/background.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p, h1, h2, h3, h4, h5, span {
    color: ${({ theme }) => theme.colors.text};
  }

  button {
	  cursor: pointer;
    border: none;
    outline: none;
  }
`;
