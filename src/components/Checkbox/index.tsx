import type { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Checkbox({ label, ...rest }: CheckboxProps) {
  return <Container aria-label={label} type="checkbox" {...rest} />;
}
