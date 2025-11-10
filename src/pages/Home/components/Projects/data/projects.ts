import isaNailSvg from "@images/isa-nail.svg";
import stillusSvg from "@images/stillus.svg";
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
    about: `A Stillus é uma academia local da minha cidade. Exceto pela logo, que já estava definida, tive liberdade criativa total e atuei em todas as etapas do projeto: backend, frontend, mobile, devops e até estratégias de marketing. Esse projeto, de pequeno/médio porte, é um marco especial na minha trajetória, pois foi nele que pude aplicar de forma prática meus aprendizados em desenvolvimento mobile com React Native.
    O aplicativo desenvolvido oferece uma experiência completa aos alunos, incluindo cadastro de novos usuários, treinos e exercícios personalizados, modos claro e escuro, opção de ativar ou desativar cronômetro, controle total de vibração e som, entre outras funcionalidades. Todo o sistema foi construído de forma totalmente personalizada, alinhado à identidade visual e às necessidades específicas do cliente.
    Até hoje mantenho esse cliente ativo, o que reforça não apenas a qualidade técnica do projeto, mas também a solidez da parceria estabelecida.`,
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
      {
        label: "Nginx",
        value: "nginx",
      },
    ],
  },
  {
    id: v4(),
    title: "Isabela Nail Designer",
    url: "https://isabelanaildesigner.netlify.app/",
    image: isaNailSvg,
    projectCardBackground: "#fff",
    about: `Desenvolvi este site para uma cliente com o objetivo de tornar sua rotina mais simples e organizada. Trata-se de uma plataforma prática e intuitiva para agendamento de serviços de manicure, que permite incluir novos serviços, ajustar valores, criar promoções e gerenciar dias e horários de trabalho de forma ágil e eficiente.
    O sistema conta com um painel administrativo completo, no qual é possível controlar todos os aspectos do negócio com facilidade. Para o cliente final, o agendamento é ainda mais simples: não há necessidade de criar uma conta, basta escolher o serviço desejado e selecionar o horário disponível.
    Os dias e horários são gerados automaticamente a partir de configurações pré-definidas, eliminando riscos de erro ou perda de tempo. Assim, a profissional pode dedicar toda a sua atenção ao que realmente importa: oferecer um excelente atendimento e a melhor experiência para seus clientes.`,
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
      {
        label: "Nginx",
        value: "nginx",
      },
    ],
  },
  {
    id: v4(),
    title: "ZipHub",
    url: "https://isabelanaildesigner.netlify.app/",
    image: isaNailSvg,
    projectCardBackground: "#fff",
    about: `Desenvolvi este site para uma cliente com o objetivo de tornar sua rotina mais simples e organizada. Trata-se de uma plataforma prática e intuitiva para agendamento de serviços de manicure, que permite incluir novos serviços, ajustar valores, criar promoções e gerenciar dias e horários de trabalho de forma ágil e eficiente.
    O sistema conta com um painel administrativo completo, no qual é possível controlar todos os aspectos do negócio com facilidade. Para o cliente final, o agendamento é ainda mais simples: não há necessidade de criar uma conta, basta escolher o serviço desejado e selecionar o horário disponível.
    Os dias e horários são gerados automaticamente a partir de configurações pré-definidas, eliminando riscos de erro ou perda de tempo. Assim, a profissional pode dedicar toda a sua atenção ao que realmente importa: oferecer um excelente atendimento e a melhor experiência para seus clientes.`,
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
      {
        label: "Nginx",
        value: "nginx",
      },
    ],
  },
];
