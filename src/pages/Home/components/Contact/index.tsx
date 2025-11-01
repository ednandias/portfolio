import { useState, type ChangeEvent } from "react";
import { Button } from "../../../../components/Button";
import { Icon } from "../../../../components/Icon";
import { Input } from "../../../../components/Input";
import { TextArea } from "../../../../components/TextArea";
import { useForm } from "../../../../hooks/useForm";
import { Section } from "../../styles";
import { ButtonSelect, Content, Form } from "./styles";

interface ContactProps {
  id: string;
}

export function Contact({ id }: ContactProps) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    observations: "",
    platforms: [] as String[],
  });

  const { getErrorMessage } = useForm(data, [
    { email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) },
  ]);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function selectPlatform(platform: string) {
    setData((prevState) => ({
      ...prevState,
      platforms: prevState.platforms.includes(platform)
        ? prevState.platforms.filter((pltf) => pltf !== platform)
        : [...prevState.platforms, platform],
    }));
  }

  return (
    <Section id={id}>
      <Content>
        <h1 className="up">Vamos tirar sua ideia do papel ✍🏻</h1>

        <Form>
          <p>Informações do projeto</p>

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
            error={getErrorMessage("email")}
          />

          <Input
            name="phone"
            value={data.phone}
            onChange={handleChange}
            icon="Phone"
            placeholder="Telefone"
            mask="(**) *****-****"
          />

          <TextArea
            name="observations"
            value={data.observations}
            onChange={handleChange}
            icon="ArticleNyTimes"
            placeholder="Conte um pouco sobre a sua ideia..."
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <ButtonSelect
              selected={data.platforms.includes("web")}
              onClick={() => selectPlatform("web")}
            >
              <Icon
                iconName="Globe"
                weight="duotone"
                color="#0d1b2a"
                size={20}
              />
              Quero um Site
            </ButtonSelect>

            <ButtonSelect
              selected={data.platforms.includes("app")}
              onClick={() => selectPlatform("app")}
            >
              <Icon
                iconName="DeviceMobile"
                weight="duotone"
                color="#0d1b2a"
                size={20}
              />
              Quero um App
            </ButtonSelect>
          </div>

          <Button icon="PaperPlaneTilt" title="Enviar E-mail" />
        </Form>
      </Content>
    </Section>
  );
}
