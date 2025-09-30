import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { ThemeProvider } from "styled-components";
import { Router } from "./router";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

export function App() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  );
}
