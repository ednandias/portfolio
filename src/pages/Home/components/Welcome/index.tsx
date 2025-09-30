import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "../../../../components/Button";
import { Icon } from "../../../../components/Icon";
import { Section } from "../../styles";
import { ButtonsView, Header, Presentation } from "./styles";

export function Welcome() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(".header", { y: "-100%" }, { y: "0%", ease: "back.out" });
    tl.fromTo("#presentation", { scale: 0 }, { scale: 1, ease: "back.out" });

    document
      .querySelector<HTMLButtonElement>("button.know-more")
      ?.addEventListener("click", () => {
        const container = document.querySelector<HTMLElement>("#about");

        gsap.to(window, {
          scrollTo: container?.offsetTop,
          duration: 0.3,
        });
      });

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
    <Section>
      <Header className="header">
        <a href="#about">
          <article>
            <Icon iconName="UserCircle" color="#fcf7f8" size={25} />
            <p>Sobre</p>
          </article>
        </a>

        <a href="#projects">
          <article>
            <Icon iconName="Briefcase" color="#fcf7f8" size={25} />
            <p>Projetos</p>
          </article>
        </a>

        <a href="#contact">
          <article>
            <Icon iconName="Mailbox" color="#fcf7f8" size={25} />
            <p>Contato</p>
          </article>
        </a>
      </Header>

      <Presentation id="presentation">
        <h1 className="welcome">Olá, Seja Bem Vindo 👋🏻</h1>

        <p className="name">
          Que tal conhecer um pouco mais sobre o meu trabalho? 👨🏻‍💻
        </p>

        <ButtonsView>
          <Button className="know-more" icon="HandTap" title="Conhecer" />
          <Button
            className="know-more"
            icon="ReadCvLogo"
            title="Baixar Currículo"
            disabled
          />
        </ButtonsView>
      </Presentation>
    </Section>
  );
}
