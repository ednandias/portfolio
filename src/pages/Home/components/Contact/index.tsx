import { Section } from "../../styles";

interface ContactProps {
  id: string;
}

export function Contact({ id }: ContactProps) {
  return <Section id={id}></Section>;
}
