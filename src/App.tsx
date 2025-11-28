import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ThemeProvider } from "styled-components";
import "tippy.js/dist/tippy.css";
import { Router } from "./router";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, MorphSVGPlugin);

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Router />
      </ThemeProvider>
    </>
  );
}
