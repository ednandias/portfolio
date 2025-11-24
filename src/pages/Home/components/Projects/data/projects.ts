import isaNailSvg from "@images/isa-nail.svg";
import stillusSvg from "@images/stillus.svg";
import ziphubSvg from "@images/ziphub.png";
import { v4 } from "uuid";

export interface Tech {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  url: string;
  image: string;
  about: string;
  techs: Tech[];
  projectCardBackground?: string;
}

export const projects: Project[] = [
  {
    id: v4(),
    title: "Stillus Academia",
    url: "https://stillus-academia.site",
    image: stillusSvg,
    projectCardBackground: "#000",
    about: `A Stillus foi meu primeiro grande projeto Full-Stack, no qual fui responsável por todo o ciclo de desenvolvimento: criação da API, desenvolvimento do site e do aplicativo móvel, além da configuração completa da infraestrutura e parte de DevOps. Também contribuí com ações de marketing.
    Apesar de ser um projeto simples, ele é bastante ambicioso. O aplicativo é completo e permite o cadastro de usuários, exercícios e treinos, oferecendo controle total para administradores. Entre as funcionalidades, inclui cronômetros, temas personalizados, vídeos, controle de peso e diversas outras ferramentas. O resultado é um app moderno, intuitivo e objetivo — exatamente como acredito que soluções digitais devem ser hoje.`,
    techs: [
      {
        label: "React",
        value: "react",
      },
      {
        label: "React Native",
        value: "react-native",
      },
      {
        label: "Node",
        value: "node",
      },
      {
        label: "PostgreSQL",
        value: "postgresql",
      },
      {
        label: "Docker",
        value: "docker",
      },
    ],
  },
  {
    id: v4(),
    title: "Isabela Nail Designer",
    url: "https://isabelanaildesigner.netlify.app/",
    image: isaNailSvg,
    projectCardBackground: "#fff",
    about: ``,
    techs: [
      {
        label: "React",
        value: "react",
      },
      {
        label: "React Native",
        value: "react-native",
      },
      {
        label: "Node",
        value: "node",
      },
      {
        label: "PostgreSQL",
        value: "postgresql",
      },
      {
        label: "Docker",
        value: "docker",
      },
    ],
  },
  {
    id: v4(),
    title: "ZipHub",
    url: "https://ziphub.com.br/site",
    image: ziphubSvg,
    projectCardBackground: "#2563eb",
    about: ``,
    techs: [
      {
        label: "React",
        value: "react",
      },
      {
        label: "React Native",
        value: "react-native",
      },
      {
        label: "Node",
        value: "node",
      },
      {
        label: "FirebirdSQL",
        value: "firebirdsql",
      },
    ],
  },
];
