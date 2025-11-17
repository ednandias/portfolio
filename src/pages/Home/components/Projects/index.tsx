import { useState } from "react";
import { Section } from "../../styles";

import { InfoSection } from "@components/InfoSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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
    gsap.fromTo(
      `#${id} .up`,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: `#${id} .up`,
          toggleActions: "restart none none none",
        },
      }
    );

    gsap.fromTo(
      `#${id} .card`,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: `#${id} .card`,
          toggleActions: "restart none none none",
        },
      }
    );
  });

  useGSAP(() => {
    const techs = gsap.utils.toArray<HTMLButtonElement>(`#${id} .card`);

    for (const tech of techs) {
      ["mouseenter", "mouseleave"].forEach((event) => {
        tech.addEventListener(event, () => {
          gsap.to(tech, {
            scale: event === "mouseenter" ? 1.1 : 1,
          });

          techs
            .filter((element) => element !== tech)
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
          <InfoSection
            className="up"
            title={t("projects.h1")}
            paragraph={t("projects.p")}
          />

          <MyProjects>
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
