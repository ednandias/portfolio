import { GhostButton } from "@components/GhostButton";
import { Tooltip } from "@components/Tooltip";
import { useGSAP } from "@gsap/react";
import { MoonIcon } from "@phosphor-icons/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import BrazilFlag from "../../../../assets/images/brazil.svg?react";
import UsaFlag from "../../../../assets/images/usa.svg?react";
import { Button } from "../../../../components/Button";
import { Icon } from "../../../../components/Icon";
import { Section } from "../../styles";
import { ButtonsView, Header, Presentation } from "./styles";

interface WelcomeProps {
  id: string;
}

export function Welcome({ id }: WelcomeProps) {
  const { t, i18n } = useTranslation();

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
        <MoonIcon size={25} />

        <a href="#welcome">
          <article>
            <Icon iconName="House" color="#fcf7f8" size={25} />
            <p>{t("header.home")}</p>
          </article>
        </a>

        <a href="#about">
          <article>
            <Icon iconName="UserCircle" color="#fcf7f8" size={25} />
            <p>{t("header.about")}</p>
          </article>
        </a>

        <a href="#projects">
          <article>
            <Icon iconName="Briefcase" color="#fcf7f8" size={25} />
            <p>{t("header.projects")}</p>
          </article>
        </a>

        <a href="#contact">
          <article>
            <Icon iconName="Mailbox" color="#fcf7f8" size={25} />
            <p>{t("header.contact")}</p>
          </article>
        </a>

        <Tooltip text={t("header.changeLanguage")} direction="bottom">
          <GhostButton
            onClick={() =>
              i18n.changeLanguage(i18n.language === "pt-BR" ? "en-US" : "pt-BR")
            }
          >
            {i18n.language === "pt-BR" ? (
              <BrazilFlag width={25} />
            ) : (
              <UsaFlag width={25} />
            )}
          </GhostButton>
        </Tooltip>
      </Header>

      <Presentation id="presentation">
        <h1 className="welcome">{t("welcome.greetings")}</h1>

        <p>{t("welcome.knowAbout")}</p>

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
