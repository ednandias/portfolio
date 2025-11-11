import { ThemeProvider } from "styled-components";
import { Router } from "./router";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

export function App() {
  gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, TextPlugin);

  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  );
}
