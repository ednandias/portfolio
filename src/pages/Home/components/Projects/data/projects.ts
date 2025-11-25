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
  platforms: string[];
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
    platforms: ["web", "app"],
  },
  {
    id: v4(),
    title: "Isabela Nail Designer",
    url: "https://isabelanaildesigner.netlify.app/",
    image: isaNailSvg,
    projectCardBackground: "#fff",
    about: `Minha cliente realizava seus agendamentos de forma totalmente manual, usando lápis e papel. Propus digitalizar o processo e o resultado foi excelente. Desenvolvemos uma solução simples, intuitiva e totalmente funcional. O agendamento é rápido, exigindo apenas nome e telefone, o que otimiza o tempo tanto da profissional quanto do cliente. No painel administrativo, é possível cadastrar novos serviços, ajustar dias e horários conforme a necessidade e gerenciar toda a operação de forma prática. O sistema é online, flexível, escalável e, acima de tudo, fácil de usar.`,
    platforms: ["web"],
  },
  {
    id: v4(),
    title: "ZipHub",
    url: "https://ziphub.com.br/site",
    image: ziphubSvg,
    projectCardBackground: "#2563eb",
    about: `Contribuo para o desenvolvimento e manutenção do ZipHub, uma plataforma completa de gerenciamento de pedidos para e-commerces. O sistema acompanha todo o ciclo de uma venda — desde a compra no marketplace (Mercado Livre, Shopee, Leroy Merlin, entre outros) até a expedição — oferecendo integrações completas com essas plataformas. A solução permite criar e editar anúncios, emitir notas fiscais e gerenciar uma série de dados essenciais para a operação. Além disso, conta com um aplicativo móvel que facilita o manuseio e o controle de estoque, utilizando WMS como estratégia de logística para garantir eficiência e precisão.`,
    platforms: ["web", "app"],
  },
];
