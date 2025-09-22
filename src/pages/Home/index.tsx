import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { About } from "./components/About";
import { Welcome } from "./components/Welcome";
import { Container, Section } from "./styles";

export function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  return (
    <Container className="container">
      <Welcome />
      <About id="about" />

      <Section
        id="projects"
        style={{
          background: "blue",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Projetos</h1>
        </div>
      </Section>

      <Section
        id="skills"
        style={{
          background: "green",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Tecnologias</h1>
        </div>
      </Section>

      <Section
        id="contact"
        style={{
          background: "orange",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Contato</h1>
        </div>
      </Section>
    </Container>
  );
}
