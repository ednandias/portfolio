import { useGSAP } from "@gsap/react";
import NodeSvg from "@images/techs/node.svg?react";
import ReactNativeSvg from "@images/techs/react-native.svg?react";
import ReactSvg from "@images/techs/react.svg?react";
import type { IconOptions } from "@interfaces/index";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import { Button } from "../../../../components/Button";
import { Icon } from "../../../../components/Icon";
import { Section } from "../../styles";
import {
  ButtonsView,
  Description,
  Divider,
  Header,
  Presentation,
} from "./styles";

interface WelcomeProps {
  id: string;
}

export function Welcome({ id }: WelcomeProps) {
  const { t } = useTranslation();
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

    tl.fromTo(".header", { y: "-100%" }, { y: "0%", ease: "back.out" });
    tl.fromTo("#presentation", { scale: 0 }, { scale: 1, ease: "back.out" });

    gsap.utils
      .toArray<HTMLAnchorElement>("header a")
      .forEach((element, _, array) => {
        element.addEventListener("click", (e) => {
          e.preventDefault();

          const target = element.getAttribute("href");

          if (target) {
            const container = document.querySelector<HTMLElement>(target);

            gsap.to(window, {
              scrollTo: container?.offsetTop,
              duration: 0.3,
            });
          }
        });

        element.addEventListener("mouseenter", () => {
          array
            .filter((el) => el !== element)
            .forEach((el) => {
              gsap.to(el, { opacity: 0.3 });
            });
        });

        element.addEventListener("mouseleave", () => {
          array.forEach((el) => {
            gsap.to(el, { opacity: 1 });
          });
        });
      });
  });

  return (
    <Section id={id}>
      <Header className="header">
        {anchors.map((anchor) => (
          <a href={anchor.to} key={anchor.to}>
            <article>
              <Icon
                iconName={anchor.icon}
                color={theme.colors.headerAnchors}
                size={25}
                weight="fill"
              />
              <p>{anchor.text}</p>
            </article>
          </a>
        ))}
      </Header>

      <Presentation id="presentation">
        <h1 className="welcome">Ednan Dias</h1>

        <Description>
          <p>Desenvolvedor Full-Stack Javascript/Typescript</p>

          <Divider />

          <div>
            <NodeSvg width={25} height={25} />
            <ReactSvg width={25} height={25} />
            <ReactNativeSvg width={25} height={25} />
          </div>
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
