import { useEffect, useRef } from "react";
import { Icon } from "../../components/Icon";
import { About } from "./components/About";
import { Welcome } from "./components/Welcome";
import { Container, Section } from "./styles";

export function Home() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onScroll(e: Event) {
      console.log("pageYOffset", window.pageYOffset);

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent = (window.pageYOffset / maxScroll) * 100;
      console.log(`Porcentagem scrollada: ${scrollPercent}%`);
    }

    containerRef.current?.addEventListener("wheel", onScroll);

    return () => {
      containerRef.current?.removeEventListener("wheel", onScroll);
    };
  }, []);

  return (
    <Container ref={containerRef} className="container">
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

      <button id="arrow-up">
        <Icon
          iconName="ArrowCircleUp"
          color="white"
          weight="duotone"
          size={50}
        />
      </button>
    </Container>
  );
}
