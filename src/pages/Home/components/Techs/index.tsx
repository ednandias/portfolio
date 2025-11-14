import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Section } from "../../styles";

import { Card } from "@components/Card";
import { InfoSection } from "@components/InfoSection";
import { Tooltip } from "@components/Tooltip";
import { getTechs } from "@utils/getTechs";
import { useTranslation } from "react-i18next";
import { Content, TechsView } from "./styles";

interface TechsProps {
  id: string;
}

export function Techs({ id }: TechsProps) {
  const techs = getTechs();

  const { t } = useTranslation();

  useGSAP(() => {
    const techs = gsap.utils.toArray<HTMLButtonElement>(`#${id} .tech`);

    for (const tech of techs) {
      ["mouseenter", "mouseleave"].forEach((event) => {
        tech.addEventListener(event, () => {
          gsap.to(tech, {
            scale: event === "mouseenter" ? 1.1 : 1,
          });

          techs
            .filter((element) => element !== tech)
            .forEach((element) => {
              gsap.to(element, {
                opacity: event === "mouseenter" ? 0.5 : 1,
              });
            });
        });
      });
    }
  });

  return (
    <Section id={id}>
      <Content>
        <InfoSection title={t("techs.h1")} paragraph={t("techs.p")} />

        <TechsView>
          {techs.map((tech) => (
            <Tooltip key={tech.name} text={tech.name}>
              <Card className="tech" imgUrl={tech.image} imagesize={80} />
            </Tooltip>
          ))}
        </TechsView>
      </Content>
    </Section>
  );
}
