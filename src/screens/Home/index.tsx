import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { Container, Content, Header } from "./styles";

export function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // tl.fromTo(
      //   ".header",
      //   { translateY: "-100%" },
      //   { translateY: 0, ease: "back.out" }
      // );
      // tl.fromTo(
      //   ".welcome",
      //   { translateX: "-100vw" },
      //   { translateX: 0, ease: "back.out" }
      // );
      // tl.fromTo(
      //   ".name",
      //   { translateX: "100vw" },
      //   { translateX: 0, ease: "back.out" }
      // );
      // tl.fromTo(
      //   ".know-button",
      //   { translateY: "100vh" },
      //   { translateY: 0, ease: "back.out" }
      // );
    },
    { scope: container }
  );

  return (
    <Container ref={container}>
      <Header className="header">
        <a href="">
          <article>
            <Icon iconName="UserCircle" color="#fcf7f8" size={20} />
            <p>Sobre Mim</p>
          </article>
        </a>

        <a href="">
          <article>
            <Icon iconName="Brain" color="#fcf7f8" size={20} />
            <p>Projetos</p>
          </article>
        </a>

        <a href="">
          <article>
            <Icon iconName="Wrench" color="#fcf7f8" size={20} />
            <p>Tecnologias</p>
          </article>
        </a>

        <a href="">
          <article>
            <Icon iconName="Mailbox" color="#fcf7f8" size={20} />
            <p>Contato</p>
          </article>
        </a>
      </Header>

      <Content>
        <section>
          <h1 className="welcome">Olá, Seja Bem Vindo 🖖🏻</h1>
        </section>
        <p className="name">
          Que tal conhecer um pouco mais sobre o meu trabalho? 👨🏻‍💻
        </p>

        <Button
          className="know-button"
          icon="HandTap"
          title="Conhecer"
          mt={10}
        />
      </Content>
    </Container>
  );
}
