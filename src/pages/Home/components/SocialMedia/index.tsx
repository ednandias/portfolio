import GitHubIcon from "@assets/icons/github.svg";
import InstagramIcon from "@assets/icons/instagram.svg";
import LinkedInIcon from "@assets/icons/linkedin.svg";
import { InfoSection } from "@components/InfoSection";
import { LogoCard } from "@components/LogoCard";
import { useGSAP } from "@gsap/react";
import { useSmoothScroll } from "@hooks/useSmoothScroll";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import { Section } from "../../styles";
import { Content, SocialCardsView } from "./styles";

interface SocialMediaProps {
  id: string;
}

export default function SocialMedia({ id }: SocialMediaProps) {
  const theme = useTheme();
  const { t } = useTranslation();

  const socialMedias = [
    {
      text: "GitHub",
      icon: GitHubIcon,
      iconViewColor: theme.colors.github,
      link: "https://github.com/ednandias",
    },
    {
      text: "LinkedIn",
      icon: LinkedInIcon,
      iconViewColor: theme.colors.linkedin,
      link: "https://www.linkedin.com/in/ednandias/",
    },
    {
      text: "Instagram",
      icon: InstagramIcon,
      iconViewColor: theme.colors.instagram,
      link: "https://www.instagram.com/nan.tsx/",
    },
  ];

  useSmoothScroll([
    { id: `#${id} .info-section` },
    { id: `#${id} .logo-card`, stagger: true },
  ]);

  useGSAP(async () => {
    const gsap = (await import("gsap")).default;

    const techs = gsap.utils.toArray<HTMLElement>(`#${id} .logo-card`);

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
        <InfoSection
          title={t("socialMedia.h1")}
          paragraph={t("socialMedia.p")}
        />

        <SocialCardsView>
          {socialMedias.map((socialMedia) => (
            <LogoCard
              key={socialMedia.text}
              text={socialMedia.text}
              icon={socialMedia.icon}
              iconViewColor={socialMedia.iconViewColor}
              link={socialMedia.link}
              alt={`Logo ${socialMedia.text}`}
            />
          ))}
        </SocialCardsView>
      </Content>
    </Section>
  );
}
