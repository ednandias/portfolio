import { InfoSection } from "@components/InfoSection";

import { useSmoothScroll } from "@hooks/useSmoothScroll";
import { useTranslation } from "react-i18next";
import { Section } from "../../styles";
import { Content } from "./styles";

interface SocialMediaProps {
  id: string;
}

export function SocialMedia({ id }: SocialMediaProps) {
  const { t } = useTranslation();

  useSmoothScroll([{ id: `#${id} .up` }]);

  return (
    <Section id={id}>
      <Content>
        <InfoSection
          className="up"
          title={t("socialMedia.h1")}
          paragraph={t("socialMedia.p")}
        />
      </Content>
    </Section>
  );
}
