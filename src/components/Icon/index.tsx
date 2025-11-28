import { type IconProps as PhosphorIconProps } from "@phosphor-icons/react";

import { Icons, type IconName } from "../../interfaces";

interface IconProps extends PhosphorIconProps {
  name: IconName;
}

export function Icon({ name, color = "black", ...rest }: IconProps) {
  const Component = Icons[name];

  return <Component color={color} {...rest} />;
}
