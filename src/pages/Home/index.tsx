import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { useRef } from "react";
import { Icon } from "../../components/Icon";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Welcome } from "./components/Welcome";
import { Container, Section } from "./styles";

export function Home() {
  const containerRef = useRef<HTMLElement>(null);

  gsap.registerPlugin(ScrollToPlugin);

  function backToTop() {
    gsap.to(window, {
      scrollTo: 0,
      duration: 0.3,
    });
  }

  useGSAP(() => {
    gsap.fromTo(
      "#arrow-up",
      {
        scale: 0,
      },
      {
        scrollTrigger: {
          trigger: "#arrow-up",
          start: "top center",
          toggleActions: "restart pause resume reverse",
          scrub: true,
        },
        scale: 1,
      }
    );
  }, []);

  return (
    <Container ref={containerRef} className="container">
      <Welcome />
      <About id="about" />

      <Projects id="projects" />

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

      <button id="arrow-up" onClick={backToTop}>
        <Icon iconName="ArrowCircleUp" color="white" weight="fill" size={40} />
      </button>
    </Container>
  );
}
