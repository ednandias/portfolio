import AwsIcon from "@assets/icons/aws.svg";
import CssIcon from "@assets/icons/css.svg";
import DockerIcon from "@assets/icons/docker.svg";
import FirebirdIcon from "@assets/icons/firebirdsql.svg";
import HtmlIcon from "@assets/icons/html.svg";
import JavascriptIcon from "@assets/icons/javascript.svg";
import LinuxIcon from "@assets/icons/linux.svg";
import MySqlIcon from "@assets/icons/mysql.svg";
import NextIcon from "@assets/icons/next.svg";
import NodeIcon from "@assets/icons/node.svg";
import PostgreSQLIcon from "@assets/icons/postgresql.svg";
import ReactNativeIcon from "@assets/icons/react-native.svg";
import ReactIcon from "@assets/icons/react.svg";
import TypescriptIcon from "@assets/icons/typescript.svg";

interface Tech {
  name: string;
  icon: string;
}

export function useTechs() {
  const techs: Tech[] = [
    {
      name: "HTML",
      icon: HtmlIcon,
    },
    {
      name: "CSS",
      icon: CssIcon,
    },
    {
      name: "Javascript",
      icon: JavascriptIcon,
    },
    {
      name: "Typescript",
      icon: TypescriptIcon,
    },
    {
      name: "Node",
      icon: NodeIcon,
    },
    {
      name: "React",
      icon: ReactIcon,
    },
    {
      name: "React Native",
      icon: ReactNativeIcon,
    },
    {
      name: "Next",
      icon: NextIcon,
    },
    {
      name: "PostgreSQL",
      icon: PostgreSQLIcon,
    },
    {
      name: "MySQL",
      icon: MySqlIcon,
    },
    {
      name: "FirebirdSQL",
      icon: FirebirdIcon,
    },
    {
      name: "Docker",
      icon: DockerIcon,
    },
    {
      name: "AWS",
      icon: AwsIcon,
    },
    {
      name: "Linux",
      icon: LinuxIcon,
    },
  ];

  return techs;
}
