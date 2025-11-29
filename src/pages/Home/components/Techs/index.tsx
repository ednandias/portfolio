import { InfoSection } from "@components/InfoSection";
import { LogoCard } from "@components/LogoCard";
import { useGSAP } from "@gsap/react";
import { useSmoothScroll } from "@hooks/useSmoothScroll";
import { useTechs } from "@hooks/useTechs";
import { useTranslation } from "react-i18next";
import { Section } from "../../styles";
import { Content, TechsView } from "./styles";

interface TechsProps {
  id: string;
}

export default function Techs({ id }: TechsProps) {
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

  useGSAP(async () => {
    const gsap = (await import("gsap")).default;

    const logoCards = gsap.utils.toArray<HTMLDivElement>(`#${id} .logo-card`);

    for (const logoCard of logoCards) {
      ["mouseenter", "mouseleave"].forEach((event) => {
        logoCard.addEventListener(event, () => {
          gsap.to(logoCard.children[0].children, {
            scale: event === "mouseenter" ? 1.5 : 1,
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
                iconViewColor={tech.color}
                contentTextColor="white"
                icon={tech.icon}
                alt={`Logo ${tech.name}`}
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
