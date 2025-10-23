import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Icon } from "../../components/Icon";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Welcome } from "./components/Welcome";
import { Container } from "./styles";

export function Home() {
  const containerRef = useRef<HTMLElement>(null);

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
      <Welcome id="welcome" />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />

      <button id="arrow-up" onClick={backToTop}>
        <Icon iconName="ArrowCircleUp" color="white" weight="fill" size={40} />
      </button>
    </Container>
  );
}
