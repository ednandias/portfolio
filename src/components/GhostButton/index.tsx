import type { CSSProperties, ReactNode } from "react";

interface GhostButtonProps {
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
    >
      {children}
    </button>
  );
}
