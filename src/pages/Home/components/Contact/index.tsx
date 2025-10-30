import { useState, type ChangeEvent } from "react";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { TextArea } from "../../../../components/TextArea";
import { Section } from "../../styles";
import { Content, Form } from "./styles";

interface ContactProps {
  id: string;
}

export function Contact({ id }: ContactProps) {
  const [data, setData] = useState({ name: "", email: "", phone: "" });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <Section id={id}>
      <Content>
        <h1 className="up">Vamos tirar sua ideia do papel ✍🏻</h1>
        <p>Me conte um pouco mais sobre seu projeto 👇🏻</p>

        <Form>
          <Input
            name="name"
            value={data.name}
            onChange={handleChange}
            icon="UserCircle"
            placeholder="Nome"
          />

          <Input
            name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
            icon="Mailbox"
            placeholder="E-mail"
          />

          <Input
            name="phone"
            value={data.phone}
            onChange={handleChange}
            icon="Phone"
            placeholder="Telefone"
            mask="(**) *****-****"
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "red",
            }}
          >
            <Button icon="PaperPlaneTilt" title="Enviar E-mail" />
            <Button icon="PaperPlaneTilt" title="Enviar E-mail" />
          </div>

          <TextArea
            icon="ArticleNyTimes"
            placeholder="Conte um pouco sobre a sua ideia..."
          />

          <Button icon="PaperPlaneTilt" title="Enviar E-mail" />
        </Form>
      </Content>
    </Section>
  );
}
