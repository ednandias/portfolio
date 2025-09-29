import { useGSAP } from "@gsap/react";
import stillusSvg from "@images/stillus.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Section } from "../../styles";
import { Card, Content, MyProjects } from "./styles";

interface ProjectsProps {
  id: string;
}

export function Projects({ id }: ProjectsProps) {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".up",
      {
        opacity: 0,
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: ".up",
          start: "top center",
          toggleActions: "restart pause resume reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );
  }, []);

  return (
    <Section id={id}>
      <Content>
        <h1>Projetos</h1>

        <MyProjects>
          <Card>
            <img src={stillusSvg} />
          </Card>

          <Card>
            <h1>1</h1>
          </Card>

          <Card>
            <h1>1</h1>
          </Card>

          <Card>
            <h1>1</h1>
          </Card>
        </MyProjects>
      </Content>
    </Section>
  );
}
