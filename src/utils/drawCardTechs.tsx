import { Card } from "../components/Card";

export function drawCardTechs(techs: string[]) {
  return techs.map((tech) => <Card imgUrl={tech} />);
}
