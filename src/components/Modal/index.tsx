import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useEffect, useRef, type ReactNode } from "react";
import { useTheme } from "styled-components";
import { Icon } from "../Icon";
import { Portal } from "../Portal";
import { Container, Content, Header, Overlay } from "./styles";

interface GenericModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  size?: "md" | "lg";
  dontCloseOnEscape?: boolean;
  animation?: "scale" | "slide-up";
  autoSize?: boolean;
}

export function Modal({
  children,
  isOpen,
  onClose,
  size,
  autoSize,
  dontCloseOnEscape,
  animation = "slide-up",
}: GenericModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const theme = useTheme();

  gsap.defaults({ duration: 0.3 });

  function handleClose() {
    switch (animation) {
      case "scale": {
        gsap.fromTo(
          containerRef.current,
          { scale: 1 },
          { scale: 0, onComplete: onClose }
        );

        break;
      }

      case "slide-up": {
        gsap.fromTo(
          containerRef.current,
          { y: 0 },
          { y: window.screen.height, onComplete: onClose }
        );

        break;
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (dontCloseOnEscape) {
          return;
        }

        handleClose();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useGSAP(() => {
    switch (animation) {
      case "scale": {
        gsap.set(containerRef.current, { scale: 0 });
        break;
      }

      case "slide-up": {
        gsap.set(containerRef.current, { y: window.screen.height });
        break;
      }
    }
  }, []);

  useGSAP(() => {
    if (isOpen) {
      switch (animation) {
        case "scale": {
          gsap.fromTo(containerRef.current, { scale: 0 }, { scale: 1 });
          break;
        }

        case "slide-up": {
          gsap.to(containerRef.current, { y: 0 });
        }
      }
    }
  }, [isOpen, animation]);

  return (
    <Portal elementId="modal-root" isOpen={isOpen}>
      <Overlay>
        <Container ref={containerRef} size={size} autoSize={autoSize}>
          <Header>
            <button onClick={handleClose}>
              <Icon
                iconName="XCircle"
                size={30}
                weight="fill"
                color={theme.colors.gold}
              />
            </button>
          </Header>

          <Content>{children}</Content>
        </Container>
      </Overlay>
    </Portal>
  );
}
