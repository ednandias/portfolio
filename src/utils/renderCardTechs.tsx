import { v4 } from "uuid";
import { Card } from "../components/Card";
import { Popover } from "../components/Popover";
import type { Tech } from "../pages/Home/components/Projects/data/projects";

type ImageImport = Record<string, { default: string }>;
type ImageTech = { name: string; path: string; baseUrl: string };
type Options = { size?: number; imagesize?: number };

export function renderCardTechs(techs: Tech[], options?: Options) {
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
    const image = imagesTech.find((imageTech) => imageTech.name === tech.value);

    return (
      <Popover key={v4()} text={tech.label}>
        <Card
          title={tech.label}
          imgUrl={image?.baseUrl ?? ""}
          size={options?.size}
          imagesize={options?.imagesize}
          noAnimate
        />
      </Popover>
    );
  });
}
