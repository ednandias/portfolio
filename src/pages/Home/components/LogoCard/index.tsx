import { Button } from "@components/Button";
import { getAppropriateColor } from "@utils/getAppropriateColor";
import { Container, Content, IconView } from "./styles";

export interface LogoCardProps {
  text: string;
  icon: string;
  iconViewColor?: string;
  contentColor?: string;
  contentTextColor?: string;
  link?: string;
}

export function LogoCard({
  text,
  icon,
  iconViewColor,
  contentColor,
  contentTextColor,
  link,
}: LogoCardProps) {
  function handleVisit(url: string) {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";

    link.click();
  }

  return (
    <Container className="logo-card">
      <IconView iconViewColor={iconViewColor}>
        <img src={icon} width={40} height={40} />
      </IconView>

      <Content contentColor={contentColor} contentTextColor={contentTextColor}>
        <p>{text}</p>

        {link && (
          <Button
            size="full"
            title="Visitar"
            icon="HandTap"
            iconColor={getAppropriateColor(iconViewColor)}
            textColor={getAppropriateColor(iconViewColor)}
            color={iconViewColor}
            onClick={() => handleVisit(link)}
            noHoverAnimation
          />
        )}
      </Content>
    </Container>
  );
}
