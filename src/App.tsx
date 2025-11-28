import { ThemeProvider } from "styled-components";
import "tippy.js/dist/tippy.css";
import { Router } from "./router";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  );
}
