import type { ReactNode } from "react";

interface GhostButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export function GhostButton({ children, onClick }: GhostButtonProps) {
  return (
    <button
      style={{
        background: "transparent",
        margin: 0,
        padding: 0,
        lineHeight: 0,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
