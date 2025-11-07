import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, type ChangeEvent } from "react";
import { Button } from "../../../../components/Button";
import { Checkbox } from "../../../../components/Checkbox";
import { Icon } from "../../../../components/Icon";
import { Input } from "../../../../components/Input";
import { TextArea } from "../../../../components/TextArea";
import { useForm } from "../../../../hooks/useForm";
import { validation } from "../../../../utils/validation";
import { Section } from "../../styles";
import { ButtonSelect, Content, Form } from "./styles";

interface ContactProps {
  id: string;
}

interface ContactState {
  name: string;
  email: string;
  phone: string;
  observations: string;
  platforms: string[];
}

export function Contact({ id }: ContactProps) {
  const [data, setData] = useState<ContactState>({
    name: "",
    email: "",
    phone: "",
    observations: "",
    platforms: [],
  });

  const { errors, hasErrors } = useForm({
    validations: [
      {
        field: "email",
        value: data.email,
        regex: validation.email,
        message: "E-mail inválido",
      },
      {
        field: "phone",
        value: data.phone,
        regex: validation.phone,
        message: "Telefone inválido",
      },
    ],
  });

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  useGSAP(() => {
    gsap.fromTo(
      `#${id} .up`,
      {
        opacity: 0,
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: `#${id} .up`,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        y: 0,
      }
    );
  });

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
        <h1 className="up">Contato</h1>

        <Form className="up">
          <Input
            name="name"
            value={data.name}
            onChange={handleChange}
            icon="UserCircle"
            placeholder="Nome"
            className="up"
          />

          <Input
            name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
            icon="Mailbox"
            placeholder="E-mail"
            className="up"
            error={errors.email}
          />

          <Input
            name="phone"
            value={data.phone}
            onChange={handleChange}
            icon="Phone"
            placeholder="Telefone"
            mask="(**) *****-****"
            className="up"
            error={errors.phone}
          />

          <TextArea
            name="observations"
            value={data.observations}
            onChange={handleChange}
            icon="ArticleNyTimes"
            placeholder="Conte um pouco sobre a sua ideia..."
            className="up"
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
              className="up"
            >
              <Checkbox checked={data.platforms.includes("web")} />
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
              className="up"
            >
              <Checkbox checked={data.platforms.includes("app")} />
              <Icon
                iconName="DeviceMobile"
                weight="duotone"
                color="#0d1b2a"
                size={20}
              />
              Quero um App
            </ButtonSelect>
          </div>

          <Button
            icon="PaperPlaneTilt"
            title="Enviar"
            className="up"
            disabled={
              !data.name ||
              !data.email ||
              !data.phone ||
              !data.observations ||
              hasErrors ||
              data.platforms.length === 0
            }
          />
        </Form>
      </Content>
    </Section>
  );
}
