import GitHubIcon from "@assets/icons/github.svg?react";
import { Button } from "@components/Button";
import { Icon } from "@components/Icon";
import { InfoSection } from "@components/InfoSection";
import { useSmoothScroll } from "@hooks/useSmoothScroll";
import { useTranslation } from "react-i18next";
import { Section } from "../../styles";
import { Content, IconView, SocialCard, SocialContent } from "./styles";

interface SocialMediaProps {
  id: string;
}

export function SocialMedia({ id }: SocialMediaProps) {
  const { t } = useTranslation();

  useSmoothScroll([{ id: `#${id} .info-section` }]);

  return (
    <Section id={id}>
      <Content>
        <InfoSection
          title={t("socialMedia.h1")}
          paragraph={t("socialMedia.p")}
        />

        <SocialCard>
          <IconView color="#000">
            <GitHubIcon width={40} height={40} />
          </IconView>

          <SocialContent>
            <p>ednandias</p>

            <Button size="full" title="Visitar" icon="HandTap" />
          </SocialContent>
        </SocialCard>
      </Content>
    </Section>
  );
}
