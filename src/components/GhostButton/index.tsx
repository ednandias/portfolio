import type { CSSProperties, ReactNode } from "react";

interface GhostButtonProps {
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}

export function GhostButton({ children, onClick, style }: GhostButtonProps) {
  return (
    <button
      style={{
        background: "transparent",
        margin: 0,
        padding: 0,
        lineHeight: 0,
        zIndex: 1,
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
