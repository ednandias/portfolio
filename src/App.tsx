import { ThemeProvider } from "styled-components";
import { Router } from "./router";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function App() {
  gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  );
}
