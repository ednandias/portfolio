import React, { Suspense } from "react";

const Welcome = React.lazy(() => import("./components/Welcome"));
const About = React.lazy(() => import("./components/About"));
const Techs = React.lazy(() => import("./components/Techs"));
const Projects = React.lazy(() => import("./components/Projects"));
const Contact = React.lazy(() => import("./components/Contact"));
const SocialMedia = React.lazy(() => import("./components/SocialMedia"));

import { Container, Content, FallbackLoading } from "./styles";

export function Home() {
  return (
    <Container>
      <Suspense
        fallback={
          <Content>
            <FallbackLoading />
          </Content>
        }
      >
        <Welcome id="welcome" />

        <About id="about" />

        <Techs id="techs" />

        <Projects id="projects" />

        <Contact id="contact" />

        <SocialMedia id="social-media" />
      </Suspense>
    </Container>
  );
}
