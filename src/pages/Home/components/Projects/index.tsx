import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { Section } from "../../styles";

import { useTranslation } from "react-i18next";
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

  const { t } = useTranslation();

  function handleSelectProject(project: Project) {
    setSelectedProject(project);
    setIsModalProjectOpen(true);
  }

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
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

    tl.fromTo(
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

    const cards = gsap.utils.toArray<HTMLButtonElement>(`#${id} .card`);

    for (const card of cards) {
      ["mouseenter", "mouseleave"].forEach((event) => {
        card.addEventListener(event, () => {
          gsap.to(card, {
            scale: event === "mouseenter" ? 1.1 : 1,
          });

          cards
            .filter((cd) => cd !== card)
            .forEach((element) => {
              gsap.to(element, {
                opacity: event === "mouseenter" ? 0.5 : 1,
              });
            });
        });
      });
    }
  });

  return (
    <>
      <Section id={id}>
        <Content>
          <h1 className="up">{t("projects.title")}</h1>

          <MyProjects className="up">
            {projects.map((project) => (
              <Card
                key={project.id}
                imgUrl={project.image}
                onClick={() => handleSelectProject(project)}
                noGlass={!!project.projectCardBackground}
                backColor={project.projectCardBackground}
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
