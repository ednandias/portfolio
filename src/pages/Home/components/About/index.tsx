import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { Section } from "../../styles";
import { Content } from "./styles";

interface AboutProps {
  id: string;
}

export function About({ id }: AboutProps) {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // gsap.fromTo(
    //   ".text",
    //   {
    //     opacity: 0,
    //     y: 50,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: ".text",
    //       start: "bottom top",
    //       toggleActions: "restart pause reverse pause",
    //       markers: true,
    //       scrub: true,
    //     },
    //     opacity: 1,
    //     y: 0,
    //   }
    // );
  }, []);

  return (
    <Section id={id}>
      <Content>
        {/* <h1 className="text">Sobre</h1> */}

        <p>
          Prazer, me chamo Ednan e moro no interior do estado de São Paulo, nerd
          por natureza, programador por amor. Tive meu primeiro contato com
          programação há quase 8 anos atrás, desde lá passei por algumas
          empresas criando soluções e resolvendo problemas de maneira rápida,
          eficiente e criativa, já atuei como suporte na retaguarda da equipe de
          desenvolvimento, na solução de bugs e refatoração de códigos, assim
          como já tomei frente na criação de sites de produtos de clientes do
          mundo inteiro; agora estou me aventurando como freelancer, onde já
          desenvolvi alguns projetos de médio/pequeno porte. Apesar de ter
          bastante experiência com o ecossistema JavaScript (Node, React e React
          Native), estou sempre estudando e me desafiando a aprender algo novo,
          e até reforçar os conhecimentos que já possuo, também sou um grande
          entusiasta da língua Inglesa, da qual sigo estudando com o objetivo de
          me tornar fluente. Espero poder te ajudar a tirar sua ideia do papel e
          transformar em um produto/serviço, dando sempre o melhor de mim, com
          extrema eficiência, carinho e o que mais prezo nessa área: qualidade e
          atenção aos detalhes. Muito obrigado por ler até aqui.
        </p>
      </Content>
    </Section>
  );
}
