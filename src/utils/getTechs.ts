import awsSvg from "@assets/icons/aws.svg";
import cssSvg from "@assets/icons/css.svg";
import dockerSvg from "@assets/icons/docker.svg";
import firebirdSvg from "@assets/icons/firebirdsql.svg";
import htmlSvg from "@assets/icons/html.svg";
import javascriptSvg from "@assets/icons/javascript.svg";
import linuxSvg from "@assets/icons/linux.svg";
import mysqlSvg from "@assets/icons/mysql.svg";
import nextSvg from "@assets/icons/next.svg";
import nodeSvg from "@assets/icons/node.svg";
import postgresqlSvg from "@assets/icons/postgresql.svg";
import reactNativeSvg from "@assets/icons/react-native.svg";
import reactSvg from "@assets/icons/react.svg";
import typescriptSvg from "@assets/icons/typescript.svg";

interface Tech {
  name: string;
  image: string;
}

export function getTechs() {
  const techs: Tech[] = [
    {
      name: "HTML",
      image: htmlSvg,
    },
    {
      name: "CSS",
      image: cssSvg,
    },
    {
      name: "Javascript",
      image: javascriptSvg,
    },
    {
      name: "Typescript",
      image: typescriptSvg,
    },
    {
      name: "Node",
      image: nodeSvg,
    },
    {
      name: "React",
      image: reactSvg,
    },
    {
      name: "React Native",
      image: reactNativeSvg,
    },
    {
      name: "Next",
      image: nextSvg,
    },
    {
      name: "PostgreSQL",
      image: postgresqlSvg,
    },
    {
      name: "MySQL",
      image: mysqlSvg,
    },
    {
      name: "FirebirdSQL",
      image: firebirdSvg,
    },
    {
      name: "Docker",
      image: dockerSvg,
    },
    {
      name: "AWS",
      image: awsSvg,
    },
    {
      name: "Linux",
      image: linuxSvg,
    },
  ];

  return techs;
}
