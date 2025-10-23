import { useState } from "react";
import { Input } from "../../../../components/Input";
import { Section } from "../../styles";
import { Content } from "./styles";

interface ContactProps {
  id: string;
}

export function Contact({ id }: ContactProps) {
  const [phone, setPhone] = useState("");

  return (
    <Section id={id}>
      <Content>
        <h1 className="up">Vamos tirar sua ideia do papel!</h1>
        <p>Me conte um pouco mais sobre seu projeto 👇🏻</p>

        {/* <Input icon="UserCircle" placeholder="Nome" /> */}
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          icon="Phone"
          placeholder="Telefone"
          mask="(**) *****-****"
        />
      </Content>
    </Section>
  );
}
