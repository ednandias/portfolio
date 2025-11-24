import { useRef } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Techs } from "./components/Techs";
import { Welcome } from "./components/Welcome";
import { Container } from "./styles";

import "./background.css";

export function Home() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <Container id="background" ref={containerRef}>
      <Welcome id="welcome" />
      <About id="about" />
      <Techs id="techs" />
      <Projects id="projects" />
      <Contact id="contact" />
    </Container>
  );
}
