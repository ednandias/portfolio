import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { Section } from "../../styles";
import { Content } from "./styles";

interface AboutProps {
  id: string;
}

export function About({ id }: AboutProps) {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // gsap.fromTo(
    //   ".text",
    //   {
    //     opacity: 0,
    //     y: 50,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: ".text",
    //       start: "bottom top",
    //       toggleActions: "restart pause reverse pause",
    //       markers: true,
    //       scrub: true,
    //     },
    //     opacity: 1,
    //     y: 0,
    //   }
    // );
  }, []);

  return (
    <Section id={id}>
      <Content>
        {/* <h1 className="text">Sobre</h1> */}

        <p>
          Me chamo Ednan e moro no interior do estado de São Paulo, nerd por
          natureza, programador por amor, ingressei no mundo do desenvolvimento
          web há mais ou menos 8 anos atrás, onde tive meu primeiro contato com
          as tecnologias que
        </p>
      </Content>
    </Section>
  );
}
