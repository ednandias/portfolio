import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { Section } from "../../styles";
import { Answer, Content, Question } from "./styles";

interface AboutProps {
  id: string;
}

export function About({ id }: AboutProps) {
  const { t, i18n } = useTranslation();

  useGSAP(() => {
    gsap.fromTo(
      `#${id} .up`,
      {
        opacity: 0,
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: `#${id} .up`,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        y: 0,
      }
    );
  }, []);

  return (
    <Section id={id}>
      <Content>
        <h1 className="up">{t("about.title")}</h1>

        <Question>Como tudo começou?</Question>

        <Answer>
          Meu interesse por programação começou <i>em 2018</i>, quando fiz um
          curso técnico presencial de{" "}
          <strong> Análise e Desenvolvimento de Sistemas </strong>e tive meu
          primeiro contato com tecnologias web, como{" "}
          <i>HTML, CSS e JavaScript</i>.
        </Answer>

        {/* {i18n.language === "pt-BR" ? (
          <p className="up">
            Prazer, me chamo Ednan Dias, sou desenvolvedor Full-Stack Pleno
            JavaScript/TypeScript. Minha história com programação começou com um
            curso técnico presencial de Análise e Desenvolvimento de Sistemas,
            foi lá onde tive meu primeiro contato com tecnologias web como HTML,
            CSS e JavaScript. Este curso foi o responsável por despertar meu
            interesse pela área, depois que me formei, fui atrás de cursos para
            me profissionalizar e me especializar, pois já tinha me decidido de
            que seria desenvolvedor web. Comecei com cursos grátis e depois
            investi em alguns cursos renomados entre a comunidade dev, estou
            atuando na área há 5 anos, nesse meio tempo já atuei como suporte de
            projetos, corrigindo bugs e implementando novas features, também já
            tomei frente de projetos maiores, sendo responsável por todo o
            ecossistema da aplicação (frontend, backend e mobile). Apesar de já
            estar na área há algum tempo, nunca parei de estudar, e tenho esse
            hábito até hoje, pois creio que qualquer ponto que possa ser
            melhorado, deve ser melhorado, então sigo buscando o melhor de mim
            profissionalmente. Hoje me considerado Pleno, pois já passei todo
            esse tempo atuando como Júnior e adquiri experiência suficiente para
            analisar, decidir e implementar demandas/solicitações de forma
            eficiente e com a maior qualidade possível. Apesar de sempre ter
            trabalhado com empresas, atuo também como freelancer, onde já fiz
            alguns projetos para clientes de pequeno/médio porte. Creio que
            posso te ajudar a tirar sua ideia do papel e ajudar a transforma-lá
            em realidade. Muito obrigado pela sua atenção!
          </p>
        ) : (
          <p className="up">
            Hi there! My name is Ednan Dias and I&apos;m a JavaScript/TypeScript
            full-stack developer. I started my programming journey with an
            in-person technical course in System Analysis and Development.
            That&apos;s where I first encountered web technologias such as HTML,
            CSS and JavaScript.
          </p>
        )} */}
      </Content>
    </Section>
  );
}
