import { Card } from "../components/Card";

type ImageImport = Record<string, { default: string }>;
type ImageTech = { name: string; path: string; baseUrl: string };

export function drawCardTechs(techs: string[]) {
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

    return <Card imgUrl={image?.baseUrl ?? ""} />;
  });
}
