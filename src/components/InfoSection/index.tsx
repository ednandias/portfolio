import { StyledParagraph, StyledTitle } from "./styles";

interface TitleInfoProps {
  title: string;
  paragraph: string;
  className?: string;
}

export function InfoSection({ title, paragraph, className }: TitleInfoProps) {
  return (
    <>
      <StyledTitle className={`info-section ${className}`}>{title}</StyledTitle>
      <StyledParagraph className={`info-section ${className}`}>
        {paragraph}
      </StyledParagraph>
    </>
  );
}
