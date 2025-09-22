import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Section } from "../../styles";

interface AboutProps {
  id: string;
}

export function About({ id }: AboutProps) {
  // useGSAP(() => {
  //   gsap.to(".text", {
  //     x: 300,
  //     scrollTrigger: {
  //       start: 100,
  //       end: 300,
  //       scrub: true,
  //     },
  //   });

  //   gsap.to(".text", {
  //     x: -300,
  //     scrollTrigger: {
  //       start: 400,
  //       end: 800,
  //       scrub: true,
  //     },
  //   });
  // });

  return (
    <Section id={id}>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="text">Sobre</h1>

        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#19297C"
            d="M31.3,-56.8C40.7,-48.8,48.5,-40.7,58.4,-31.2C68.4,-21.7,80.4,-10.8,85.1,2.7C89.7,16.2,87,32.4,79.8,46.6C72.6,60.9,60.9,73.1,46.9,78.5C32.9,83.9,16.4,82.4,0.6,81.4C-15.2,80.4,-30.5,79.8,-41.5,72.6C-52.6,65.5,-59.5,51.9,-63.5,38.7C-67.6,25.5,-68.9,12.8,-67.7,0.7C-66.4,-11.3,-62.7,-22.7,-57.8,-34.4C-52.8,-46.1,-46.7,-58.2,-36.9,-65.9C-27,-73.6,-13.5,-76.9,-1.3,-74.7C11,-72.5,21.9,-64.8,31.3,-56.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </Section>
  );
}
