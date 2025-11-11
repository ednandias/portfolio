import { useRef } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Welcome } from "./components/Welcome";
import { Container } from "./styles";

export function Home() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <Container ref={containerRef}>
      <Welcome id="welcome" />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
    </Container>
  );
}
