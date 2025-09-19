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

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, div#root {
    height: 100%;
  }

  body, button, input {
    font-size: 1rem;
    font-family: "Rubik", sans-serif;
    -webkit-font-smoothing: antialiased;
    font-optical-sizing: auto;
    font-style: normal;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
	  cursor: pointer;
    border: none;
    outline: none;
  }
`;
