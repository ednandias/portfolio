import isaNailSvg from "@images/isa-nail.svg";
import stillusSvg from "@images/stillus.svg";
import { v4 as uuidv4 } from "uuid";

export interface Project {
  id: string;
  title: string;
  image: string;
  about: string;
  techs: string[];
}

export const projects: Project[] = [
  {
    title: "Stillus Academia",
    image: stillusSvg,
    about:
      "Stillus é uma academia local da minha cidade. Tirando a logo da empresa, que já estava pronta, tive total responsabilidade criativa, atuando em todas as fases do projeto: backend, frontend, mobile, devops e marketing. Tenho orgulho de manter esse cliente ativo até hoje, pois, apesar de ser um projeto de pequeno/médio porte, foi nele que consegui aplicar de forma prática todos os meus aprendizados em desenvolvimento mobile com React Native. O aplicativo conta com diversas funcionalidades úteis, como cadastro de novos usuários, exercícios e treinos personalizados para cada cliente, modos claro e escuro, opção de ativar ou não o cronômetro, total controle sobre vibração/som, entre outras features. O app foi construído 100% personalizado de acordo com a identidade visual e preferências do cliente.",
    techs: ["node", "react", "react-native", "postgresql", "docker"],
  },
  {
    title: "Isabela Nail Designer",
    about: "Stillus é uma academia ",
    image: isaNailSvg,
  },
].map((card) => ({
  ...card,
  id: uuidv4(),
}));
