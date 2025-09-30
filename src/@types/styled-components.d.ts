import "styled-components";
import type theme from "../styles/theme";

declare module "styled-components" {
  type Theme = typeof theme;

  export interface DefaultTheme extends Theme {}
}
