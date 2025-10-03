import { Button } from "../../../../../components/Button";
import { Card } from "../../../../../components/Card";
import { Modal } from "../../../../../components/Modal";
import { renderCardTechs } from "../../../../../utils/renderCardTechs";
import type { Project } from "../data/projects";
import { Container, Content, Info, Techs } from "./styles";

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
          <Card imgUrl={project.image} noAnimate />

          <h1>{project.title}</h1>

          <Techs>
            {renderCardTechs(project.techs, {
              size: 50,
              imagesize: 30,
            })}
          </Techs>

          <a href={project.url} target="_blank">
            <Button icon="ArrowSquareOut" title="Visitar" size="full" />
          </a>
        </Info>

        <Content>
          <p>{project.about}</p>
        </Content>
      </Container>
    </Modal>
  );
}
