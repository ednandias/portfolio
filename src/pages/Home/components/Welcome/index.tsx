import BrazilSvg from "@assets/icons/brazil.svg?react";
import UsaSvg from "@assets/icons/usa.svg?react";
import { GhostButton } from "@components/GhostButton";
import { useGSAP } from "@gsap/react";
import { useTypewriter } from "@hooks/useTypewriter";
import type { IconName } from "@interfaces/index";
import { isMobile } from "@utils/isMobile";
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

export default function Welcome({ id }: WelcomeProps) {
  const { start, TypedText } = useTypewriter({
    baseText: ``,
    words: [
      {
        text: "Desenvolvedor Full-Stack JavaScript",
        pause: true,
      },
    ],
  });
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  const anchors: { to: string; icon: IconName; text: string }[] = [
    {
      to: "#welcome",
      icon: "HouseIcon",
      text: t("header.home"),
    },
    {
      to: "#about",
      icon: "UserCircleIcon",
      text: t("header.about"),
    },
    {
      to: "#techs",
      icon: "CodeIcon",
      text: t("header.tecnologies"),
    },
    {
      to: "#projects",
      icon: "BriefcaseIcon",
      text: t("header.projects"),
    },
    {
      to: "#contact",
      icon: "MailboxIcon",
      text: t("header.contact"),
    },
  ];

  useEffect(() => {
    import("gsap");
    import("gsap/ScrollToPlugin");
  }, []);

  async function handleGoTo() {
    const container = document.querySelector<HTMLElement>("#about");

    const gsap = (await import("gsap")).default;
    const { ScrollToPlugin } = await import("gsap/ScrollToPlugin");
    gsap.registerPlugin(ScrollToPlugin);

    gsap.to(window, {
      scrollTo: container?.offsetTop,
      duration: 0.3,
    });
  }

  useGSAP(async () => {
    const gsap = (await import("gsap")).default;
    const { ScrollToPlugin } = await import("gsap/ScrollToPlugin");
    gsap.registerPlugin(ScrollToPlugin);

    const tl = gsap.timeline();

    tl.to("header", { y: "0", ease: "back.out" });
    tl.to("#greetings", { scale: 1, ease: "back.out", onComplete: start });

    const links = gsap.utils.toArray<HTMLAnchorElement>("header a");
    const cleanups: (() => void)[] = [];

    for (const link of links) {
      function handleClick() {
        const target = link.getAttribute("href");

        if (target) {
          const container = document.querySelector<HTMLElement>(target);
          gsap.to(window, {
            scrollTo: container?.offsetTop,
            duration: 0.3,
          });
        }
      }

      function mouseEnter() {
        gsap.to(link.firstChild, {
          fill: theme.colors.gold,
        });

        gsap.to(link.lastChild, {
          color: theme.colors.gold,
        });

        links
          .filter((el) => el !== link)
          .forEach((el) => gsap.to(el, { opacity: 0.3 }));
      }

      function mouseLeave() {
        gsap.to(link.firstChild, {
          fill: "white",
        });

        gsap.to(link.lastChild, {
          color: "white",
        });

        links
          .filter((el) => el !== link)
          .forEach((el) => gsap.to(el, { opacity: 1 }));
      }

      link.addEventListener("click", handleClick);
      link.addEventListener("mouseenter", mouseEnter);
      link.addEventListener("mouseleave", mouseLeave);

      cleanups.push(() => {
        link.removeEventListener("click", handleClick);
        link.removeEventListener("mouseenter", mouseEnter);
        link.removeEventListener("mouseleave", mouseLeave);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  });

  return (
    <Section id={id}>
      <Header className="header">
        {anchors.map((anchor) => (
          <a key={anchor.to} href={anchor.to}>
            <Icon
              name={anchor.icon}
              color={theme.colors.text}
              size={25}
              weight="fill"
            />

            {!isMobile && <p>{anchor.text}</p>}
          </a>
        ))}

        <GhostButton
          aria-label={t("header.aria.changeLanguage")}
          onClick={() =>
            i18n.changeLanguage(i18n.language === "pt-BR" ? "en-US" : "pt-BR")
          }
          title={t("header.button")}
        >
          {i18n.language === "pt-BR" ? (
            <BrazilSvg width={25} height={25} />
          ) : (
            <UsaSvg width={25} height={25} />
          )}
        </GhostButton>
      </Header>

      <Presentation>
        <div id="greetings">
          <h1>Ednan Dias</h1>

          <Description>
            <TypedText />
          </Description>

          <ButtonsView>
            <Button
              className="know-more"
              icon="HandTapIcon"
              title={t("welcome.knowButton")}
              onClick={handleGoTo}
            />

            <a
              href="/download/curriculo.pdf"
              download="Currículo Ednan Dias.pdf"
            >
              <Button
                type="submit"
                className="know-more"
                icon="ReadCvLogoIcon"
                title={t("welcome.downloadButton")}
              />
            </a>
          </ButtonsView>
        </div>
      </Presentation>
    </Section>
  );
}
