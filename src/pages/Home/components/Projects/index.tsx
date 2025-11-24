import { useState } from "react";
import { Section } from "../../styles";

import { InfoSection } from "@components/InfoSection";
import { useGSAP } from "@gsap/react";
import { useSmoothScroll } from "@hooks/useSmoothScroll";
import Tippy from "@tippyjs/react";
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

  useSmoothScroll([
    {
      id: `#${id} .info-section`,
      stagger: true,
    },
    {
      id: `#${id} .card`,
      stagger: true,
    },
  ]);

  useGSAP(() => {
    const projects = gsap.utils.toArray<HTMLButtonElement>(`#${id} .card`);

    for (const project of projects) {
      ["mouseenter", "mouseleave"].forEach((event) => {
        project.addEventListener(event, () => {
          projects
            .filter((element) => element !== project)
            .forEach((element) => {
              gsap.to(element, {
                opacity: event === "mouseenter" ? 0.3 : 1,
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
          <InfoSection title={t("projects.h1")} paragraph={t("projects.p")} />

          <MyProjects>
            {projects.map((project) => (
              <Tippy key={project.id} content={project.title}>
                <Card
                  imgUrl={project.image}
                  onClick={() => handleSelectProject(project)}
                  noGlass={!!project.projectCardBackground}
                  backColor={project.projectCardBackground}
                />
              </Tippy>
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
