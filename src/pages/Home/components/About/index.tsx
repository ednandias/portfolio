import { GhostButton } from "@components/GhostButton";
import { Icon } from "@components/Icon";
import { InfoSection } from "@components/InfoSection";
import { useGSAP } from "@gsap/react";
import { useSmoothScroll } from "@hooks/useSmoothScroll";
import type { IconName } from "@interfaces/index";
import { isMobile } from "@utils/isMobile";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import { Section } from "../../styles";
import {
  Answer,
  Answers,
  Content,
  FormQuestions,
  Question,
  QuestionMobile,
  Questions,
} from "./styles";

interface AboutProps {
  id: string;
}

interface Question {
  id: number;
  text: string;
  icon: IconName;
  content: string;
}

export default function About({ id }: AboutProps) {
  const [selectedQuestion, setSelectedQuestion] = useState("howStarted");
  const [isQuestionSectionOpen, setIsQuestionSectionOpen] = useState(true);

  const { t } = useTranslation();
  const theme = useTheme();

  const arrowsInLineHorizontal =
    "M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM69.66,90.34a8,8,0,0,0-11.32,11.32L76.69,120H16a8,8,0,0,0,0,16H76.69L58.34,154.34a8,8,0,0,0,11.32,11.32l32-32a8,8,0,0,0,0-11.32ZM240,120H179.31l18.35-18.34a8,8,0,0,0-11.32-11.32l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L179.31,136H240a8,8,0,0,0,0-16Z";

  const arrowsOutLineHorizontal =
    "M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM96,120H35.31l18.35-18.34A8,8,0,0,0,42.34,90.34l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L35.31,136H96a8,8,0,0,0,0-16Zm149.66,2.34-32-32a8,8,0,0,0-11.32,11.32L220.69,120H160a8,8,0,0,0,0,16h60.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,122.34Z";

  useSmoothScroll([
    { id: `#${id} .info-section` },
    { id: `#${id} .question` },
    { id: `#${id} .answer` },
  ]);

  useGSAP(
    async () => {
      const gsap = (await import("gsap")).default;
      const { MorphSVGPlugin } = await import("gsap/MorphSVGPlugin");
      gsap.registerPlugin(MorphSVGPlugin);

      //? SVG Icon
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

  useGSAP(
    async () => {
      const gsap = (await import("gsap")).default;

      //? Answer
      gsap.fromTo(
        `#${id} .answer`,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        }
      );
    },
    { dependencies: [selectedQuestion] }
  );

  useGSAP(async () => {
    const gsap = (await import("gsap")).default;

    //? Questions Mouse Event
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
        <InfoSection title={t("about.h1")} paragraph={t("about.p")} />

        <FormQuestions>
          <Questions>
            {!isMobile && (
              <GhostButton
                aria-label={
                  isQuestionSectionOpen
                    ? t("about.aria.closeQuestions")
                    : t("about.aria.expandQuestions")
                }
                onClick={() =>
                  setIsQuestionSectionOpen((prevState) => !prevState)
                }
                className="question"
              >
                <svg
                  width="35"
                  height="35"
                  fill={theme.colors.gold}
                  viewBox="0 0 256 256"
                >
                  <path id="iconAbout" d={arrowsInLineHorizontal} />
                </svg>
              </GhostButton>
            )}

            <Question
              className="question"
              onClick={() => setSelectedQuestion("howStarted")}
              $isSelected={selectedQuestion === "howStarted"}
            >
              <Icon
                name="PottedPlantIcon"
                size={25}
                weight="duotone"
                color={theme.colors.primary}
              />

              {!isMobile && <p>{t("about.howStarted.title")}</p>}
            </Question>

            <Question
              className="question"
              onClick={() => setSelectedQuestion("myExperiences")}
              $isSelected={selectedQuestion === "myExperiences"}
            >
              <Icon
                name="ChartLineUpIcon"
                size={25}
                weight="duotone"
                color={theme.colors.primary}
              />

              {!isMobile && <p>{t("about.myExperiences.title")}</p>}
            </Question>

            <Question
              className="question"
              onClick={() => setSelectedQuestion("whyProgramming")}
              $isSelected={selectedQuestion === "whyProgramming"}
            >
              <Icon
                name="HeartIcon"
                size={25}
                weight="duotone"
                color={theme.colors.primary}
              />

              {!isMobile && <p>{t("about.whyProgramming.title")}</p>}
            </Question>

            <Question
              className="question"
              onClick={() => setSelectedQuestion("mainStack")}
              $isSelected={selectedQuestion === "mainStack"}
            >
              <Icon
                name="CodeIcon"
                size={25}
                weight="duotone"
                color={theme.colors.primary}
              />

              {!isMobile && <p>{t("about.mainStack.title")}</p>}
            </Question>

            <Question
              className="question"
              onClick={() => setSelectedQuestion("myUniqueAdvantage")}
              $isSelected={selectedQuestion === "myUniqueAdvantage"}
            >
              <Icon
                name="StarIcon"
                size={25}
                weight="duotone"
                color={theme.colors.primary}
              />

              {!isMobile && <p>{t("about.myUniqueAdvantage.title")}</p>}
            </Question>

            <Question
              className="question"
              onClick={() => setSelectedQuestion("myGoal")}
              $isSelected={selectedQuestion === "myGoal"}
            >
              <Icon
                name="TargetIcon"
                size={25}
                weight="duotone"
                color={theme.colors.primary}
              />

              {!isMobile && <p>{t("about.myGoal.title")}</p>}
            </Question>
          </Questions>

          <Answers>
            {isMobile && (
              <QuestionMobile className="up">
                {t(`about.${selectedQuestion}.title`)}
              </QuestionMobile>
            )}

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
