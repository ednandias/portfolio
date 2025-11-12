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
  Info,
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
  const questions: Question[] = [
    {
      id: 1,
      text: "Como tudo começou",
      icon: "PottedPlant",
      content: () => (
        <Answer>
          Meu interesse por programação começou em 2018, quando fiz um curso
          técnico presencial de Análise e Desenvolvimento de Sistemas e tive meu
          primeiro contato com tecnologias web, como HTML, CSS e JavaScript.
        </Answer>
      ),
    },
    {
      id: 2,
      text: "Minhas experiências",
      icon: "ChartLineUp",
      content: () => (
        <Answer>
          Trabalho profissionalmente desde 2020, acumulando cinco anos de
          experiência. Já atuei como desenvolvedor back-end,
          front-end,full-stack e analista de sistemas, além de atuar também como
          freelancer. Durante esse período, levantei requisitos, implementei
          novas funções, refatorei códigos, corrigi bugs e criei ecossistemas
          inteiros(web, APIs e mobile). Por isso, posso atuar como júnior e me
          sinto confiante o bastante para trabalhar como pleno.
        </Answer>
      ),
    },
    {
      id: 3,
      text: "Por que programação?",
      icon: "Heart",
      content: () => (
        <Answer>
          Optei por seguir no mundo do desenvolvimento porque gosto de
          transformar ideias em projetos reais, automatizar processos, criar
          marcas de valor, solucionar problemas por meio da tecnologia e
          contribuir com a comunidade em geral.
        </Answer>
      ),
    },
    {
      id: 4,
      text: "Stack principal",
      icon: "Code",
      content: () => (
        <Answer>
          Escolhi o JavaScript como minha principal tecnologia, pois com ele
          consigo atender a qualquer solicitação ou demanda, como criar uma API
          robusta, segura e escalável com Node.js, criar um site moderno,
          funcional e completo com React e entregar um aplicativo atual,
          performático e multiplataforma com React Native. A imaginação é o
          limite.
        </Answer>
      ),
    },
    {
      id: 5,
      text: "Qual o meu diferencial?",
      icon: "Star",
      content: () => (
        <Answer>
          Eu diria que meu diferencial é ser estudioso e persistente. Desde que
          conheci a área, nunca parei de estudar, mesmo quando estava
          trabalhando. Comecei com cursos gratuitos no YouTube e em outras
          plataformas, mas também já investi em cursos pagos para me
          profissionalizar e, principalmente, me especializar nas tecnologias
          que já conheço. Acredito que a acomodação é o que desqualifica um
          profissional para o mercado de trabalho com o passar do tempo.
        </Answer>
      ),
    },
    {
      id: 6,
      text: "Meu objetivo",
      icon: "Target",
      content: () => (
        <Answer>
          Meu objetivo é me tornar referência dentro de uma comunidade ou
          empresa, e ajudar o maior número de pessoas que eu conseguir,
          ajudando-as a tirar sua ideias do papel e transformar seus
          sonhos/negócios em realidade por meio do meu conhecimento técnico,
          gostaria também, de no futuro, aconselhar e auxiliar pessoas que vão
          passar pelas dificuldade que eu passei quando estava iniciando na
          minha carreira.
        </Answer>
      ),
    },
  ];

  const [isQuestionSectionOpen, setIsQuestionSectionOpen] = useState(true);
  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);

  const { t } = useTranslation();
  const theme = useTheme();

  const pathA =
    "M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM69.66,90.34a8,8,0,0,0-11.32,11.32L76.69,120H16a8,8,0,0,0,0,16H76.69L58.34,154.34a8,8,0,0,0,11.32,11.32l32-32a8,8,0,0,0,0-11.32ZM240,120H179.31l18.35-18.34a8,8,0,0,0-11.32-11.32l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L179.31,136H240a8,8,0,0,0,0-16Z";

  const pathB =
    "M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM96,120H35.31l18.35-18.34A8,8,0,0,0,42.34,90.34l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L35.31,136H96a8,8,0,0,0,0-16Zm149.66,2.34-32-32a8,8,0,0,0-11.32,11.32L220.69,120H160a8,8,0,0,0,0,16h60.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,122.34Z";

  function handleChangeQuestionSection() {
    gsap.to("#icon1", {
      duration: 1,
      morphSVG: isQuestionSectionOpen ? pathA : pathB,
      ease: "power2.inOut",
    });
  }

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
        <Info>
          <h1 className="up">{t("about.title")}</h1>

          <GhostButton onClick={handleChangeQuestionSection}>
            <svg width="40" height="40" fill="#f3b61f" viewBox="0 0 256 256">
              <path id="icon1" d={pathA} />
            </svg>
          </GhostButton>
        </Info>

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
