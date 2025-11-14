import awsSvg from "@images/techs/aws.svg";
import cssSvg from "@images/techs/css.svg";
import dockerSvg from "@images/techs/docker.svg";
import firebirdSvg from "@images/techs/firebirdsql.svg";
import htmlSvg from "@images/techs/html.svg";
import javascriptSvg from "@images/techs/javascript.svg";
import linuxSvg from "@images/techs/linux.svg";
import mysqlSvg from "@images/techs/mysql.svg";
import nextSvg from "@images/techs/next.svg";
import nodeSvg from "@images/techs/node.svg";
import postgresqlSvg from "@images/techs/postgresql.svg";
import reactNativeSvg from "@images/techs/react-native.svg";
import reactSvg from "@images/techs/react.svg";
import typescriptSvg from "@images/techs/typescript.svg";

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
