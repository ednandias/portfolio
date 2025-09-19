import type { ComponentType } from "react";

import * as PhosphorIcon from "@phosphor-icons/react";

import type { IconOptions } from "../../interfaces";

export interface IconProps extends PhosphorIcon.IconProps {
  iconName: IconOptions;
}

export function Icon({ iconName, color, ...rest }: IconProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (PhosphorIcon as any)[
    iconName
  ] as ComponentType<PhosphorIcon.IconProps>;

  if (!IconComponent) {
    const FallbackIcon =
      PhosphorIcon.QuestionIcon as ComponentType<PhosphorIcon.IconProps>;
    return <FallbackIcon color={color || "white"} {...rest} />;
  }

  return <IconComponent color={color || "black"} {...rest} />;
}
