import { Card } from "../../../../../components/Card";
import { Modal } from "../../../../../components/Modal";
import { drawCardTechs } from "../../../../../utils/drawCardTechs";
import type { Project } from "../projects";
import { Container, Content, Info, ProjectCard, Visit } from "./styles";

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
          <Card imgUrl={project.image} />

          <h1>{project.title}</h1>
        </Info>

        <Content>
          <p>{project.about}</p>
        </Content>

        <Visit>
          <p>Techs</p>

          {drawCardTechs(project.techs)}
        </Visit>
      </Container>
    </Modal>
  );
}
