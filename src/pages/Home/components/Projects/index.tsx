import isaNailSvg from "@assets/icons/isa-nail.svg";
import stillusSvg from "@assets/icons/stillus.svg";
import ziphubSvg from "@assets/icons/ziphub.png";
import { InfoSection } from "@components/InfoSection";
import { useGSAP } from "@gsap/react";
import { useSmoothScroll } from "@hooks/useSmoothScroll";
import { isMobile } from "@utils/isMobile";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { v4 } from "uuid";
import { Card } from "../../../../components/Card";
import { Section } from "../../styles";
import { ModalProject } from "./ModalProject";
import { Content, MyProjects } from "./styles";

export interface Project {
  id: string;
  title: string;
  link: string;
  image: string;
  about: string;
  platforms: string[];
  projectCardBackground?: string;
}

interface ProjectsProps {
  id: string;
}

export default function Projects({ id }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState({} as Project);
  const [isModalProjectOpen, setIsModalProjectOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const projects: Project[] = useMemo(() => {
    return [
      {
        id: v4(),
        title: "Stillus Academia",
        link: "https://stillus-academia.site",
        image: stillusSvg,
        projectCardBackground: "#000",
        about:
          i18n.language === "pt-BR"
            ? `A Stillus foi meu primeiro grande projeto Full-Stack, no qual fui responsável por todo o ciclo de desenvolvimento: criação da API, desenvolvimento do site e do aplicativo móvel, além da configuração completa da infraestrutura e parte de DevOps. Também contribuí com ações de marketing. Apesar de ser um projeto simples, ele é bastante ambicioso. O aplicativo é completo e permite o cadastro de usuários, exercícios e treinos, oferecendo controle total para administradores. Entre as funcionalidades, inclui cronômetros, temas personalizados, vídeos, controle de peso e diversas outras ferramentas. O resultado é um app moderno, intuitivo e objetivo — exatamente como acredito que soluções digitais devem ser hoje.`
            : `Stillus was my first major full-stack project, in which I was responsible for the entire development cycle: API creation, website and mobile app development, as well as complete infrastructure configuration and part of DevOps. I also contributed to marketing activities. Although it is a simple project, it is quite ambitious. The application is comprehensive and allows users to register, exercise, and train, offering total control to administrators. Among its features are stopwatches, custom themes, videos, weight control, and several other tools. The result is a modern, intuitive, and objective app—exactly how I believe digital solutions should be today.`,
        platforms: ["web", "app"],
      },
      {
        id: v4(),
        title: "Isabela Nail Designer",
        link: "https://isabelanaildesigner.netlify.app/",
        image: isaNailSvg,
        projectCardBackground: "#fff",
        about:
          i18n.language === "pt-BR"
            ? `Minha cliente realizava seus agendamentos de forma totalmente manual, usando lápis e papel. Propus digitalizar o processo e o resultado foi excelente. Desenvolvemos uma solução simples, intuitiva e totalmente funcional. O agendamento é rápido, exigindo apenas nome e telefone, o que otimiza o tempo tanto da profissional quanto do cliente. No painel administrativo, é possível cadastrar novos serviços, ajustar dias e horários conforme a necessidade e gerenciar toda a operação de forma prática. O sistema é online, flexível, escalável e, acima de tudo, fácil de usar.`
            : `My client used to schedule appointments entirely manually, using pen and paper. I proposed digitizing the process, and the result was excellent. We developed a simple, intuitive, and fully functional solution. Scheduling is quick, requiring only a name and phone number, which optimizes time for both the professional and the client. In the administrative panel, it is possible to register new services, adjust days and times as needed, and manage the entire operation in a practical way. The system is online, flexible, scalable, and, above all, easy to use.`,
        platforms: ["web"],
      },
      {
        id: v4(),
        title: "ZipHub",
        link: "https://ziphub.com.br/site",
        image: ziphubSvg,
        projectCardBackground: "#2563eb",
        about:
          i18n.language === "pt-BR"
            ? `Contribuo para o desenvolvimento e manutenção do ZipHub, uma plataforma completa de gerenciamento de pedidos para e-commerces. O sistema acompanha todo o ciclo de uma venda — desde a compra no marketplace (Mercado Livre, Shopee, Leroy Merlin, entre outros) até a expedição — oferecendo integrações completas com essas plataformas. A solução permite criar e editar anúncios, emitir notas fiscais e gerenciar uma série de dados essenciais para a operação. Além disso, conta com um aplicativo móvel que facilita o manuseio e o controle de estoque, utilizando WMS como estratégia de logística para garantir eficiência e precisão.`
            : `I contribute to the development and maintenance of ZipHub, a complete order management platform for e-commerce businesses. The system tracks the entire sales cycle—from purchase on the marketplace (Mercado Livre, Shopee, Leroy Merlin, among others) to shipment—offering complete integration with these platforms. The solution allows you to create and edit ads, issue invoices, and manage a range of data essential to the operation. In addition, it has a mobile app that facilitates inventory handling and control, using WMS as a logistics strategy to ensure efficiency and accuracy.`,
        platforms: ["web", "app"],
      },
    ];
  }, [i18n.language]);

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

  useGSAP(async () => {
    const gsap = (await import("gsap")).default;
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
              <Card
                key={project.id}
                size={isMobile ? 100 : 0}
                imageSize={isMobile ? 50 : 80}
                imgUrl={project.image}
                alt={`Logo ${project.title}`}
                onClick={() => handleSelectProject(project)}
                noGlass={!!project.projectCardBackground}
                backColor={project.projectCardBackground}
              />
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
