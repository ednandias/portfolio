import { GhostButton } from "@components/GhostButton";
import { Icon } from "@components/Icon";
import { useGSAP } from "@gsap/react";
import type { IconOptions } from "@interfaces/index";
import gsap from "gsap";
import { useState, type JSX } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import { Section } from "../../styles";
import {
  Answer,
  Answers,
  Content,
  FormQuestions,
  Highlight,
  Question,
  Questions,
} from "./styles";

interface AboutProps {
  id: string;
}

interface Question {
  id: number;
  text: string;
  icon: IconOptions;
  content: () => JSX.Element;
}

export function About({ id }: AboutProps) {
  const { colors } = useTheme();

  const questions: Question[] = [
    {
      id: 1,
      text: "Como tudo começou",
      icon: "PottedPlant",
      content: () => (
        <Answer>
          Meu interesse por programação começou em <strong>2018</strong>, quando
          fiz um curso técnico presencial de{" "}
          <strong>Análise e Desenvolvimento de Sistemas</strong> e tive meu
          primeiro contato com tecnologias web, como{" "}
          <Highlight color={colors.html}>HTML</Highlight>,{" "}
          <Highlight color={colors.css}>CSS</Highlight> e{" "}
          <Highlight color={colors.javascript}>JavaScript</Highlight>.
        </Answer>
      ),
    },
    {
      id: 2,
      text: "Minhas experiências",
      icon: "ChartLineUp",
      content: () => (
        <Answer>
          Trabalho profissionalmente <strong>desde 2020</strong>, acumulando{" "}
          <strong>cinco anos de experiência</strong>. Já atuei como
          desenvolvedor <strong>back-end</strong>, <strong>front-end</strong>,{" "}
          <strong>full-stack</strong> e <strong>analista de sistemas</strong>,
          além de atuar também como <strong>freelancer</strong>. Durante esse
          período, levantei requisitos, implementei novas funções, refatorei
          códigos, corrigi bugs e criei ecossistemas inteiros{" "}
          <strong>(web, APIs e mobile)</strong>. Por isso, posso atuar como{" "}
          <strong>júnior</strong> e me sinto confiante o bastante para trabalhar
          como <strong>pleno</strong>.
        </Answer>
      ),
    },
    {
      id: 3,
      text: "Por que programação?",
      icon: "Heart",
      content: () => (
        <Answer>
          Optei por seguir no mundo do desenvolvimento porque gosto de{" "}
          <strong>transformar</strong> ideias em projetos reais,{" "}
          <strong>automatizar </strong> processos, <strong>criar</strong> marcas
          de valor, <strong>solucionar</strong> problemas por meio da tecnologia
          e <strong>contribuir</strong> com a comunidade em geral.
        </Answer>
      ),
    },
    {
      id: 4,
      text: "Stack principal",
      icon: "Code",
      content: () => (
        <Answer>
          Escolhi o <Highlight color={colors.javascript}>JavaScript</Highlight>{" "}
          como minha <strong>principal</strong> tecnologia, pois com ele consigo
          atender a qualquer solicitação ou demanda, como criar uma API{" "}
          <strong>robusta, segura e escalável</strong> com{" "}
          <Highlight color={colors.node}>Node.js</Highlight>, criar um site{" "}
          <strong>moderno, funcional e completo</strong> com{" "}
          <Highlight color={colors.react}>React</Highlight> e entregar um
          aplicativo <strong>atual, performático e multiplataforma</strong> com{" "}
          <Highlight color={colors.reactNative}>React Native</Highlight>. A{" "}
          <strong>imaginação é o limite</strong>.
        </Answer>
      ),
    },
    {
      id: 5,
      text: "Qual o meu diferencial?",
      icon: "Star",
      content: () => (
        <Answer>
          Eu diria que meu <strong>diferencial</strong> é ser{" "}
          <strong>estudioso</strong> e <strong>persistente</strong>. Desde que
          conheci a área, nunca parei de estudar, mesmo quando estava
          trabalhando. Comecei com cursos gratuitos no YouTube e em outras
          plataformas, mas também já <strong>investi</strong> em cursos pagos
          para me <strong>profissionalizar</strong> e, principalmente, me{" "}
          <strong>especializar</strong>
          nas tecnologias que já conheço. Acredito que a{" "}
          <strong>acomodação</strong> é o que <strong>desqualifica</strong> um{" "}
          <strong>profissional</strong> para o{" "}
          <strong>mercado de trabalho</strong> com o passar do{" "}
          <strong>tempo</strong>.
        </Answer>
      ),
    },
    {
      id: 6,
      text: "Meu objetivo",
      icon: "Target",
      content: () => (
        <Answer>
          Meu <strong>objetivo</strong> é me tornar <strong>referência</strong>{" "}
          dentro de uma <strong>comunidade ou empresa</strong>, e{" "}
          <strong>ajudar</strong> o maior número de pessoas que eu conseguir,
          ajudando-as a tirar sua <strong>ideias</strong> do papel e{" "}
          <strong>transformar</strong>
          seus <strong>sonhos/negócios</strong> em <strong>realidade</strong>{" "}
          por meio do meu <strong>conhecimento técnico</strong>, gostaria
          também, de no <strong>futuro</strong>, <strong>aconselhar</strong> e
          <strong>auxiliar</strong> pessoas que vão passar pelas{" "}
          <strong>dificuldade</strong> que eu passei quando estava{" "}
          <strong>iniciando</strong> na minha <strong>carreira</strong>.
        </Answer>
      ),
    },
  ];

  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);

  const { t } = useTranslation();
  const theme = useTheme();

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

    const questions = gsap.utils.toArray<HTMLButtonElement>(".question");

    for (const question of questions) {
      ["mouseenter", "mouseleave"].forEach((event) => {
        question.addEventListener(event, () => {
          gsap.to(question, {
            scale: event === "mouseenter" ? 1.03 : 1,
          });
        });
      });
    }
  }, []);

  return (
    <Section id={id}>
      <Content>
        <h1 className="up">
          {t("about.title")}{" "}
          <GhostButton>
            <Icon
              iconName="
        "
            />
          </GhostButton>
        </h1>

        <FormQuestions>
          <Questions>
            {questions.map((question) => (
              <Question
                className="question"
                key={question.text}
                onClick={() => setSelectedQuestion(question)}
                isSelected={selectedQuestion.id === question.id}
              >
                <p>{question.text}</p>

                <Icon
                  iconName={question.icon}
                  size={25}
                  weight="duotone"
                  color={theme.colors.primary}
                />
              </Question>
            ))}
          </Questions>

          <Answers>{selectedQuestion.content()}</Answers>
        </FormQuestions>
      </Content>
    </Section>
  );
}
