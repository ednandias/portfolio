import { Container, StyledParagraph, StyledTitle } from "./styles";

interface TitleInfoProps {
  title: string;
  paragraph: string;
  className?: string;
}

export function InfoSection({ title, paragraph, className }: TitleInfoProps) {
  return (
    <Container className={`info-section ${className}`}>
      <StyledTitle>{title}</StyledTitle>
      <StyledParagraph>{paragraph}</StyledParagraph>
    </Container>
  );
}
