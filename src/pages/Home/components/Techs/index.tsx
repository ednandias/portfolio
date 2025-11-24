import { Card } from "@components/Card";
import { InfoSection } from "@components/InfoSection";
import { useGSAP } from "@gsap/react";
import { useSmoothScroll } from "@hooks/useSmoothScroll";
import Tippy from "@tippyjs/react";
import { getTechs } from "@utils/getTechs";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { Section } from "../../styles";
import { Content, TechsView } from "./styles";

interface TechsProps {
  id: string;
}

export function Techs({ id }: TechsProps) {
  const techs = getTechs();

  const { t } = useTranslation();

  useSmoothScroll([
    {
      id: `#${id} .info-section`,
    },
    {
      id: `#${id} .card`,
      stagger: true,
    },
  ]);

  useGSAP(() => {
    //? Cards
    const techs = gsap.utils.toArray<HTMLButtonElement>(`#${id} .card`);

    for (const tech of techs) {
      ["mouseenter", "mouseleave"].forEach((event) => {
        tech.addEventListener(event, () => {
          techs
            .filter((element) => element !== tech)
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
    <Section id={id}>
      <Content>
        <InfoSection title={t("techs.h1")} paragraph={t("techs.p")} />

        <TechsView>
          {techs.map((tech) => (
            <Tippy key={tech.name} content={tech.name}>
              <Card imgUrl={tech.image} imagesize={80} />
            </Tippy>
          ))}
        </TechsView>
      </Content>
    </Section>
  );
}
