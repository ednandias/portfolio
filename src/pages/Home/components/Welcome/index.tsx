import { GhostButton } from "@components/GhostButton";
import { useGSAP } from "@gsap/react";
import { useTypewriter } from "@hooks/useTypewriter";
import animatedFlagBrazilGif from "@images/animated-flag-brazil.gif";
import animatedFlagUsaGif from "@images/animated-flag-usa.gif";
import type { IconOptions } from "@interfaces/index";
import gsap from "gsap";
import { useEffect, useState } from "react";
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
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const { start, TypedText } = useTypewriter({
    baseText: `Programação é `,
    words: [{ text: "Incrível" }, { text: "Desafiador" }],
  });
  const { t, i18n } = useTranslation();
  const theme = useTheme();

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

    const cleanups: (() => void)[] = [];

    for (const link of links) {
      function handleClick(e: globalThis.PointerEvent) {
        e.preventDefault();

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

    return () => {
      cleanups.forEach((fn) => fn());
    };
  });

  useGSAP(
    () => {
      if (scrollPercentage > 15) {
        gsap.to(".header a svg", {
          width: 30,
          height: 30,
        });

        gsap.to(".header a p", {
          fontSize: 0,
          display: "none",
          duration: 0.3,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(".header a svg", {
          width: 25,
          height: 25,
        });

        gsap.to(".header a p", {
          fontSize: "1rem",
          display: "block",
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    },
    { dependencies: [scrollPercentage] }
  );

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollPercentage(Math.round((scrollY / scrollableHeight) * 100));
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Section id={id}>
      <Header className="header">
        {anchors.map((anchor) => (
          <a
            key={anchor.to}
            href={anchor.to}
            title={scrollPercentage > 15 ? anchor.text : ""}
          >
            <Icon
              iconName={anchor.icon}
              color={theme.colors.text}
              size={25}
              weight="fill"
            />

            <p>{anchor.text}</p>
          </a>
        ))}

        <GhostButton
          onClick={() =>
            i18n.changeLanguage(i18n.language === "pt-BR" ? "en-US" : "pt-BR")
          }
          title={t("header.button")}
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

        <Description>
          <TypedText />
        </Description>

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
