import { GhostButton } from "@components/GhostButton";
import { useGSAP } from "@gsap/react";
import { useTypewriter } from "@hooks/useTypewriter";
import animatedFlagBrazilGif from "@images/animated-flag-brazil.gif";
import animatedFlagUsaGif from "@images/animated-flag-usa.gif";
import type { IconOptions } from "@interfaces/index";
import gsap from "gsap";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import { Button } from "../../../../components/Button";
import { Icon } from "../../../../components/Icon";
import { Section } from "../../styles";
import { ButtonsView, Description, Header, Presentation } from "./styles";

interface WelcomeProps {
  id: string;
}

export function Welcome({ id }: WelcomeProps) {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const { start, TypedText } = useTypewriter(
    "Javascript/Typescript Full-Stack Developer"
  );

  const anchors: { to: string; icon: IconOptions; text: string }[] = [
    {
      to: "#welcome",
      icon: "House",
      text: t("header.home"),
    },
    {
      to: "#about",
      icon: "UserCircle",
      text: t("header.about"),
    },
    {
      to: "#techs",
      icon: "Code",
      text: t("header.tecnologies"),
    },
    {
      to: "#projects",
      icon: "Briefcase",
      text: t("header.projects"),
    },
    {
      to: "#contact",
      icon: "Mailbox",
      text: t("header.contact"),
    },
  ];

  function handleGoTo() {
    const container = document.querySelector<HTMLElement>("#about");

    gsap.to(window, {
      scrollTo: container?.offsetTop,
      duration: 0.3,
    });
  }

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(".header", { y: "-100vh" }, { y: "0", ease: "back.out" });
    tl.fromTo(
      "#presentation",
      { scale: 0 },
      { scale: 1, ease: "back.out", onComplete: start }
    );

    const links = gsap.utils.toArray<HTMLAnchorElement>("header a");

    for (const link of links) {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        const target = link.getAttribute("href");

        if (target) {
          const container = document.querySelector<HTMLElement>(target);

          gsap.to(window, {
            scrollTo: container?.offsetTop,
            duration: 0.3,
          });
        }
      });

      ["mouseenter", "mouseleave"].forEach((event) => {
        link.addEventListener(event, () => {
          links
            .filter((element) => element !== link)
            .forEach((element) =>
              gsap.to(element, {
                opacity: event === "mouseenter" ? 0.3 : "1",
              })
            );
        });
      });
    }
  });

  useGSAP(() => {});

  return (
    <Section id={id}>
      <Header className="header">
        {anchors.map((anchor) => (
          <a href={anchor.to} key={anchor.to}>
            <article>
              <Icon
                iconName={anchor.icon}
                color={theme.colors.text}
                size={25}
                weight="fill"
              />
              <p>{anchor.text}</p>
            </article>
          </a>
        ))}

        <GhostButton
          onClick={() =>
            i18n.changeLanguage(i18n.language === "pt-BR" ? "en-US" : "pt-BR")
          }
        >
          {i18n.language === "pt-BR" ? (
            <img
              src={animatedFlagBrazilGif}
              style={{
                width: "auto",
                height: 20,
              }}
            />
          ) : (
            <img
              src={animatedFlagUsaGif}
              style={{
                width: "auto",
                height: 20,
              }}
            />
          )}
        </GhostButton>
      </Header>

      <Presentation id="presentation">
        <h1 className="welcome">Ednan Dias</h1>

        <Description>{/* <TypedText /> */}</Description>

        <ButtonsView>
          <Button
            className="know-more"
            icon="HandTap"
            title={t("welcome.knowButton")}
            onClick={handleGoTo}
          />

          <a href="/download/curriculo.pdf" download="Currículo Ednan Dias.pdf">
            <Button
              type="submit"
              className="know-more"
              icon="ReadCvLogo"
              title={t("welcome.downloadButton")}
            />
          </a>
        </ButtonsView>
      </Presentation>
    </Section>
  );
}
