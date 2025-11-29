import AwsIcon from "@assets/icons/aws-white.svg";
import CssIcon from "@assets/icons/css-white.svg";
import DockerIcon from "@assets/icons/docker-white.svg";
import FirebirdIcon from "@assets/icons/firebirdsql-white.svg";
import HtmlIcon from "@assets/icons/html-white.svg";
import JavascriptIcon from "@assets/icons/javascript-white.svg";
import LinuxIcon from "@assets/icons/linux-white.svg";
import MySqlIcon from "@assets/icons/mysql-white.svg";
import NextIcon from "@assets/icons/next-white.svg";
import NodeIcon from "@assets/icons/node-white.svg";
import PostgreSQLIcon from "@assets/icons/postgresql-white.svg";
import ReactIcon from "@assets/icons/react-white.svg";
import TypescriptIcon from "@assets/icons/typescript-white.svg";

interface Tech {
  name: string;
  icon: string;
  color: string;
}

export function useTechs() {
  const techs: Tech[] = [
    {
      name: "HTML",
      icon: HtmlIcon,
      color: "#E34F26",
    },
    {
      name: "CSS",
      icon: CssIcon,
      color: "#1572B6",
    },
    {
      name: "Javascript",
      icon: JavascriptIcon,
      color: "#deb808",
    },
    {
      name: "Typescript",
      icon: TypescriptIcon,
      color: "#3178C6",
    },
    {
      name: "Node",
      icon: NodeIcon,
      color: "#339933",
    },
    {
      name: "React",
      icon: ReactIcon,
      color: "#29cbf8",
    },
    {
      name: "React Native",
      icon: ReactIcon,
      color: "#6278f2",
    },
    {
      name: "Next",
      icon: NextIcon,
      color: "#000",
    },
    {
      name: "PostgreSQL",
      icon: PostgreSQLIcon,
      color: "#336791",
    },
    {
      name: "MySQL",
      icon: MySqlIcon,
      color: "#4479A1",
    },
    {
      name: "FirebirdSQL",
      icon: FirebirdIcon,
      color: "#F40A0B",
    },
    {
      name: "Docker",
      icon: DockerIcon,
      color: "#2496ED",
    },
    {
      name: "AWS",
      icon: AwsIcon,
      color: "#F90",
    },
    {
      name: "Linux",
      icon: LinuxIcon,
      color: "#9E9E9E",
    },
  ];

  return techs;
}
