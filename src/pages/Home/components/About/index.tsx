import { GhostButton } from "@components/GhostButton";
import { Icon } from "@components/Icon";
import { useGSAP } from "@gsap/react";
import type { IconOptions } from "@interfaces/index";
import gsap from "gsap";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import { Section } from "../../styles";
import {
  Answer,
  Answers,
  Content,
  FormQuestions,
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
  content: string;
}

export function About({ id }: AboutProps) {
  const [selectedQuestion, setSelectedQuestion] = useState("howStarted");
  const [isQuestionSectionOpen, setIsQuestionSectionOpen] = useState(true);

  const { t } = useTranslation();
  const theme = useTheme();

  const arrowsInLineHorizontal =
    "M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM69.66,90.34a8,8,0,0,0-11.32,11.32L76.69,120H16a8,8,0,0,0,0,16H76.69L58.34,154.34a8,8,0,0,0,11.32,11.32l32-32a8,8,0,0,0,0-11.32ZM240,120H179.31l18.35-18.34a8,8,0,0,0-11.32-11.32l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L179.31,136H240a8,8,0,0,0,0-16Z";

  const arrowsOutLineHorizontal =
    "M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM96,120H35.31l18.35-18.34A8,8,0,0,0,42.34,90.34l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L35.31,136H96a8,8,0,0,0,0-16Zm149.66,2.34-32-32a8,8,0,0,0-11.32,11.32L220.69,120H160a8,8,0,0,0,0,16h60.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,122.34Z";

  useGSAP(
    () => {
      gsap.to("#iconAbout", {
        duration: 0.3,
        morphSVG: isQuestionSectionOpen
          ? arrowsInLineHorizontal
          : arrowsOutLineHorizontal,
        ease: "power2.inOut",
      });

      gsap.to(".question p", {
        fontSize: !isQuestionSectionOpen ? 0 : "1.25rem",
        display: !isQuestionSectionOpen ? "none" : "block",
        duration: 0.3,
        ease: "power2.inOut",
      });
    },
    { dependencies: [isQuestionSectionOpen] }
  );

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
  });

  return (
    <Section id={id}>
      <Content>
        <Info>
          <h1 className="up">{t("about.title")}</h1>

          <GhostButton
            className="up"
            onClick={() => setIsQuestionSectionOpen((prevState) => !prevState)}
          >
            <svg
              width="40"
              height="40"
              fill={theme.colors.gold}
              viewBox="0 0 256 256"
            >
              <path id="iconAbout" d={arrowsInLineHorizontal} />
            </svg>
          </GhostButton>
        </Info>

        <FormQuestions>
          <Questions>
            <Question
              className="question"
              onClick={() => setSelectedQuestion("howStarted")}
              $isSelected={selectedQuestion === "howStarted"}
            >
              <Icon
                iconName="PottedPlant"
                size={25}
                weight="duotone"
                color={theme.colors.primary}
              />

              <p>{t("about.howStarted.title")}</p>
            </Question>

            <Question
              className="question"
              onClick={() => setSelectedQuestion("myExperiences")}
              $isSelected={selectedQuestion === "myExperiences"}
            >
              <Icon
                iconName="ChartLineUp"
                size={25}
                weight="duotone"
                color={theme.colors.primary}
              />

              <p>{t("about.myExperiences.title")}</p>
            </Question>

            <Question
              className="question"
              onClick={() => setSelectedQuestion("whyProgramming")}
              $isSelected={selectedQuestion === "whyProgramming"}
            >
              <Icon
                iconName="Heart"
                size={25}
                weight="duotone"
                color={theme.colors.primary}
              />

              <p>{t("about.whyProgramming.title")}</p>
            </Question>

            <Question
              className="question"
              onClick={() => setSelectedQuestion("mainStack")}
              $isSelected={selectedQuestion === "mainStack"}
            >
              <Icon
                iconName="Code"
                size={25}
                weight="duotone"
                color={theme.colors.primary}
              />

              <p>{t("about.mainStack.title")}</p>
            </Question>

            <Question
              className="question"
              onClick={() => setSelectedQuestion("myUniqueAdvantage")}
              $isSelected={selectedQuestion === "myUniqueAdvantage"}
            >
              <Icon
                iconName="Star"
                size={25}
                weight="duotone"
                color={theme.colors.primary}
              />

              <p>{t("about.myUniqueAdvantage.title")}</p>
            </Question>

            <Question
              className="question"
              onClick={() => setSelectedQuestion("myGoal")}
              $isSelected={selectedQuestion === "myGoal"}
            >
              <Icon
                iconName="Target"
                size={25}
                weight="duotone"
                color={theme.colors.primary}
              />

              <p>{t("about.myGoal.title")}</p>
            </Question>
          </Questions>

          <Answers>
            {selectedQuestion === "howStarted" && (
              <Answer className="answer">{t("about.howStarted.text")}</Answer>
            )}

            {selectedQuestion === "myExperiences" && (
              <Answer className="answer">
                {t("about.myExperiences.text")}
              </Answer>
            )}

            {selectedQuestion === "whyProgramming" && (
              <Answer className="answer">
                {t("about.whyProgramming.text")}
              </Answer>
            )}

            {selectedQuestion === "mainStack" && (
              <Answer className="answer">{t("about.mainStack.text")}</Answer>
            )}

            {selectedQuestion === "myUniqueAdvantage" && (
              <Answer className="answer">
                {t("about.myUniqueAdvantage.text")}
              </Answer>
            )}

            {selectedQuestion === "myGoal" && (
              <Answer className="answer">{t("about.myGoal.text")}</Answer>
            )}
          </Answers>
        </FormQuestions>
      </Content>
    </Section>
  );
}
