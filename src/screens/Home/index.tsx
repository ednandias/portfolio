import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, type MouseEvent } from "react";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { Container, Header, Presentation, Section } from "./styles";

export function Home() {
  const container = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(".header", { y: "-100%" }, { y: "0%", ease: "back.out" });
      tl.fromTo("#presentation", { scale: 0 }, { scale: 1, ease: "back.out" });

      gsap.utils
        .toArray<HTMLAnchorElement>("header a")
        .forEach((element, index, array) => {
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
    },
    { scope: container }
  );

  function handleScrollTo(id: string) {
    console.log(id);
    const section = document.querySelector<HTMLElement>(id);

    console.log(section);
  }

  return (
    <Container className="container" ref={container}>
      <Section>
        <Header className="header">
          <a href="#about" onClick={() => handleScrollTo("#about")}>
            <article>
              <Icon iconName="UserCircle" color="#fcf7f8" size={25} />
              <p>Sobre</p>
            </article>
          </a>

          <a href="#projects">
            <article>
              <Icon iconName="Brain" color="#fcf7f8" size={25} />
              <p>Projetos</p>
            </article>
          </a>

          <a href="#skills">
            <article>
              <Icon iconName="Wrench" color="#fcf7f8" size={25} />
              <p>Tecnologias</p>
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
          <h1 className="welcome">Olá, Seja Bem Vindo 🖖🏻</h1>

          <p className="name">
            Que tal conhecer um pouco mais sobre o meu trabalho? 👨🏻‍💻
          </p>

          <Button
            className="know-button"
            icon="HandTap"
            title="Conhecer"
            mt={10}
          />
        </Presentation>
      </Section>

      <Section
        id="about"
        style={{
          background: "red",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Sobre</h1>
        </div>
      </Section>
    </Container>
  );
}
