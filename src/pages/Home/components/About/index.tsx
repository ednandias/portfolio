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
  gsap.registerPlugin(ScrollToPlugin);

  useGSAP(() => {
    gsap.to("h1", {
      x: 100,
      scrollTrigger: {
        trigger: "h1",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });

    gsap.to("h1", {
      x: 200,
      scrollTrigger: {
        trigger: "h1",
        start: "center center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <Section id={id}>
      <Content>
        <h1 className="text">Sobre</h1>
      </Content>
    </Section>
  );
}
