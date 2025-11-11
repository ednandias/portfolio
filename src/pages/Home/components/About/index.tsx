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

        <Question>Como tudo começou</Question>

        <Answer>
          Meu interesse por programação começou <i>em 2018</i>, quando fiz um
          curso técnico presencial de{" "}
          <strong> Análise e Desenvolvimento de Sistemas </strong>e tive meu
          primeiro contato com tecnologias web, como{" "}
          <i>HTML, CSS e JavaScript</i>.
        </Answer>

        <Question>Minhas Experiências</Question>

        <Answer>
          Trabalho profissionalmente desde <i>2020</i>, acumulando{" "}
          <i>cinco anos de experiência</i>. Já atuei como desenvolvedor{" "}
          <strong>back-end</strong>, <strong>front-end</strong>,{" "}
          <strong>full-stack</strong> e <strong>analista de sistemas</strong>,
          além de atuar como <strong>freelancer</strong>. Durante esse período,
          levantei requisitos, analisei as melhores abordagens, implementei
          novas funções, refatorei códigos, corrigi bugs e criei ecossistemas
          inteiros (web, APIs e mobile). Por isso, posso atuar como profissional{" "}
          <strong>júnior</strong> e me sinto confiante o bastante para trabalhar
          como profissional <strong>pleno</strong>.
        </Answer>

        <Question>Porque programação?</Question>

        <Answer>Escolhi programação</Answer>
      </Content>
    </Section>
  );
}
