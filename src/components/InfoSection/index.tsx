import { StyledParagraph, StyledTitle } from "./styles";

interface TitleInfoProps {
  title: string;
  paragraph: string;
}

export function InfoSection({ title, paragraph }: TitleInfoProps) {
  return (
    <>
      <StyledTitle className="info-section-title">{title}</StyledTitle>
      <StyledParagraph>{paragraph}</StyledParagraph>
    </>
  );
}
