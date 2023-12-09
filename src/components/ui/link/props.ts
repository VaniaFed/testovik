import type { LinkHTMLAttributes } from "react";

export interface Props extends LinkHTMLAttributes<HTMLAnchorElement> {
  isExternal?: boolean;
  children?: React.ReactNode;
  level?: "h1" | "h2" | "h3" | "paragraph" | "label";
  color?: "black" | "white" | "blue";
  underline?: boolean;
  iconType?: "go" | "edit";
}
