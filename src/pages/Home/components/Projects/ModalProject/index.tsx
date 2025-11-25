import Tippy from "@tippyjs/react";
import { Button } from "../../../../../components/Button";
import { Card } from "../../../../../components/Card";
import { Modal } from "../../../../../components/Modal";
import type { Project } from "../data/projects";
import { Container, Content, Info } from "./styles";

interface ModalProjectProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export function ModalProject({ isOpen, onClose, project }: ModalProjectProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <Container>
        <Info>
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
                    <Card icon="Globe" size={50} />
                  </Tippy>
                )}

                {project.platforms.includes("app") && (
                  <Tippy content="App">
                    <Card icon="DeviceMobile" size={50} />
                  </Tippy>
                )}
              </section>
            )}
          </div>

          <a href={project.url} target="_blank" rel="noreferrer">
            <Button icon="ArrowSquareOut" title="Conhecer" size="full" />
          </a>
        </Info>

        <Content>
          <p>{project.about}</p>
        </Content>
      </Container>
    </Modal>
  );
}
