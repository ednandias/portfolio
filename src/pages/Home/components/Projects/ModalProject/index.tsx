import { useGSAP } from "@gsap/react";

import Tippy from "@tippyjs/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import type { Project } from "..";
import { Button } from "../../../../../components/Button";
import { Card } from "../../../../../components/Card";
import { Modal } from "../../../../../components/Modal";
import { Container, Content, Info } from "./styles";

interface ModalProjectProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export function ModalProject({ isOpen, onClose, project }: ModalProjectProps) {
  const { t } = useTranslation();

  useGSAP(
    () => {
      if (isOpen) {
        gsap.fromTo(
          "#pj-info",
          {
            x: -100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
          }
        );

        gsap.fromTo(
          "#pj-content",
          {
            x: 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
          }
        );
      }
    },
    { dependencies: [isOpen] }
  );

  function handleVisit(url: string) {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";

    link.click();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Container>
        <Info id="pj-info">
          <div>
            <Card
              imgUrl={project.image}
              noGlass={!!project.projectCardBackground}
              backColor={project.projectCardBackground}
            />

            <h1>{project.title}</h1>

            {project.platforms.length > 0 && (
              <section id="platforms">
                {project.platforms.includes("web") && (
                  <Tippy content="Web">
                    <Card icon="GlobeIcon" size={50} />
                  </Tippy>
                )}

                {project.platforms.includes("app") && (
                  <Tippy content="App">
                    <Card icon="DeviceMobileIcon" size={50} />
                  </Tippy>
                )}
              </section>
            )}
          </div>

          <Button
            icon="HandTapIcon"
            title={t("projects.modalProject.button")}
            size="full"
            onClick={() => handleVisit(project.link)}
          />
        </Info>

        <Content id="pj-content">
          <p>{project.about}</p>
        </Content>
      </Container>
    </Modal>
  );
}
