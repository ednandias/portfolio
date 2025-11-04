import type { InputHTMLAttributes } from "react";
import { Container } from "./styles";

export function Checkbox({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return <Container type="checkbox" {...rest} />;
}
