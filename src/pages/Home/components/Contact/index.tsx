import { InfoSection } from "@components/InfoSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
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
  message: string;
  platforms: string[];
}

export function Contact({ id }: ContactProps) {
  const [data, setData] = useState<ContactState>({
    name: "",
    email: "",
    message: "",
    platforms: [],
  });

  const { t } = useTranslation();

  const { errors, hasErrors } = useForm({
    validations: [
      {
        field: "email",
        value: data.email,
        regex: validation.email,
        message: "E-mail inválido",
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

  function selectPlatform(platform: string) {
    setData((prevState) => ({
      ...prevState,
      platforms: prevState.platforms.includes(platform)
        ? prevState.platforms.filter((pltf) => pltf !== platform)
        : [...prevState.platforms, platform],
    }));
  }

  function handleSendMessage() {
    const numeroWhatsApp = "5517991262596";

    const textoWhatsApp = `*Novo contato do site*%0A%0A*Nome:* ${
      data.name
    }%0A*E-mail:* ${data.email}%0A*Plataformas:* ${data.platforms.join(
      ", "
    )}%0A*Mensagem:* ${data.message}`;

    window.open(
      `https://wa.me/${numeroWhatsApp}?text=${textoWhatsApp}`,
      "_blank"
    );
  }

  useGSAP(() => {
    gsap.fromTo(
      `#${id} .up`,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: `#${id} .up`,
          toggleActions: "restart none none none",
        },
      }
    );
  });

  return (
    <Section id={id}>
      <Content>
        <InfoSection
          className="up"
          title={t("contact.h1")}
          paragraph={t("contact.p")}
        />

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

          <TextArea
            name="message"
            value={data.message}
            onChange={handleChange}
            icon="ArticleNyTimes"
            placeholder="Me mande uma mensagem..."
            className="up"
            maxLength={800}
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
              <Checkbox
                checked={data.platforms.includes("web")}
                onChange={() => {}}
              />
              <Icon
                iconName="Globe"
                weight="duotone"
                color="#0d1b2a"
                size={20}
              />
              Site
            </ButtonSelect>

            <ButtonSelect
              selected={data.platforms.includes("app")}
              onClick={() => selectPlatform("app")}
              className="up"
            >
              <Checkbox
                checked={data.platforms.includes("app")}
                onChange={() => {}}
              />
              <Icon
                iconName="DeviceMobile"
                weight="duotone"
                color="#0d1b2a"
                size={20}
              />
              App
            </ButtonSelect>
          </div>

          <Button
            icon="WhatsappLogo"
            title="Enviar Mensagem"
            className="up"
            onClick={handleSendMessage}
            disabled={
              !data.name ||
              !data.email ||
              !data.message ||
              hasErrors ||
              data.platforms.length === 0
            }
          />
        </Form>
      </Content>
    </Section>
  );
}
