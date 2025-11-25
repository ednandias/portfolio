import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

interface GhostButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  className?: string | undefined;
}

export function GhostButton({
  children,
  onClick,
  style,
  className,
  ...rest
}: GhostButtonProps) {
  return (
    <button
      className={className}
      style={{
        background: "transparent",
        margin: 0,
        padding: 0,
        lineHeight: 0,
        zIndex: 1,
        position: "relative",
        display: "inline-block",
        ...style,
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
