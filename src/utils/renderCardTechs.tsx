import { Card } from "../components/Card";

type ImageImport = Record<string, { default: string }>;
type ImageTech = { name: string; path: string; baseUrl: string };
type Options = { size?: number; imageSize?: number };

export function renderCardTechs(techs: string[], options?: Options) {
  const images = import.meta.glob("../assets/images/techs/*.svg", {
    eager: true,
  }) as ImageImport;

  const imagesTech: ImageTech[] = [];

  for (const [key, value] of Object.entries(images)) {
    imagesTech.push({
      name: key.split("/")[key.split("/").length - 1].split(".")[0],
      path: key,
      baseUrl: value.default,
    });
  }

  return techs.map((tech) => {
    const image = imagesTech.find((imageTech) => imageTech.name === tech);

    return (
      <Card
        title={tech}
        imgUrl={image?.baseUrl ?? ""}
        size={options?.size}
        imageSize={options?.imageSize}
      />
    );
  });
}
