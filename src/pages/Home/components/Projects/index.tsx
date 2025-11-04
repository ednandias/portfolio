import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { Section } from "../../styles";

import { Card } from "../../../../components/Card";
import { ModalProject } from "./ModalProject";
import { projects, type Project } from "./data/projects";
import { Content, MyProjects } from "./styles";

interface ProjectsProps {
  id: string;
}

export function Projects({ id }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState({} as Project);
  const [isModalProjectOpen, setIsModalProjectOpen] = useState(false);

  function handleSelectProject(project: Project) {
    setSelectedProject(project);
    setIsModalProjectOpen(true);
  }

  useGSAP(() => {
    gsap.fromTo(
      `#${id} .up`,
      {
        opacity: 0,
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: `#${id} .up`,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        y: 0,
      }
    );

    const cards = gsap.utils.toArray<HTMLButtonElement>(`#${id} .card`);

    for (const card of cards) {
      ["mouseenter", "mouseleave"].forEach((event) => {
        card.addEventListener(event, () => {
          gsap.to(card, { y: event === "mouseenter" ? -10 : 0 });
        });
      });
    }

    gsap.fromTo(
      `#${id} .card`,
      {
        y: 100,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: `#${id} .up`,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 0,
        opacity: 1,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <>
      <Section id={id}>
        <Content>
          <h1 className="up">Projetos</h1>

          <MyProjects className="up">
            {projects.map((project) => (
              <Card
                key={project.id}
                imgUrl={project.image}
                onClick={() => handleSelectProject(project)}
              />
            ))}
          </MyProjects>
        </Content>
      </Section>

      {isModalProjectOpen && (
        <ModalProject
          isOpen={isModalProjectOpen}
          onClose={() => setIsModalProjectOpen(false)}
          project={selectedProject}
        />
      )}
    </>
  );
}
