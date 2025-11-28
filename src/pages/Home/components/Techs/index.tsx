import { InfoSection } from "@components/InfoSection";
import { useGSAP } from "@gsap/react";
import { useSmoothScroll } from "@hooks/useSmoothScroll";
import { useTechs } from "@hooks/useTechs";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import { Section } from "../../styles";
import { LogoCard } from "../LogoCard";
import { Content, TechsView } from "./styles";

interface TechsProps {
  id: string;
}

export function Techs({ id }: TechsProps) {
  const theme = useTheme();
  const techs = useTechs();
  const { t } = useTranslation();

  useSmoothScroll([
    {
      id: `#${id} .info-section`,
    },
    {
      id: `#${id} .logo-card`,
      stagger: true,
    },
  ]);

  useGSAP(() => {
    //? Cards
    const techs = gsap.utils.toArray<HTMLButtonElement>(`#${id} .logo-card`);

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
          <div className="center-tech">
            {techs.map((tech) => (
              <LogoCard
                key={tech.name}
                text={tech.name}
                contentColor="white"
                contentTextColor={theme.colors.primary}
                icon={tech.icon}
              />

              // <Card
              //   size={isMobile ? 100 : 0}
              //   imgUrl={tech.image}
              //   imagesize={isMobile ? 50 : 80}
              // />
            ))}
          </div>
        </TechsView>
      </Content>
    </Section>
  );
}
