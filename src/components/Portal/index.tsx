import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  isOpen: boolean;
  elementId?: string;
}

export function Portal({
  children,
  isOpen,
  elementId = "portal-root",
}: PortalProps) {
  let element = document.getElementById(elementId);

  if (!document.body.contains(element)) {
    element = document.createElement("div");

    element.setAttribute("id", elementId);

    document.body.appendChild(element);
  }

  if (!isOpen) {
    document.body.removeChild(element!);

    return null;
  }

  return createPortal(children, element!);
}
