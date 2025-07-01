import { defineMermaidSetup } from "@slidev/types";

// Define your color palette
const catppuccinLatte = {
  base: "#eff1f5",
  mantle: "#e6e9ef",
  crust: "#dce0e8",
  text: "#4c4f69",
  subtext1: "#5c5f77",
  subtext0: "#6c6f85",
  overlay2: "#7c7f93",
  overlay1: "#8c8fa1",
  overlay0: "#9ca0b0",
  surface2: "#acb0be",
  surface1: "#bcc0cc",
  surface0: "#ccd0da",
  blue: "#1e66f5",
  lavender: "#7287fd",
  sapphire: "#209fb5",
  sky: "#04a5e5",
  teal: "#179299",
  green: "#40a02b",
  yellow: "#df8e1d",
  peach: "#fe640b",
  maroon: "#e64553",
  red: "#d20f39",
  mauve: "#8839ef",
  pink: "#ea76cb",
  flamingo: "#dd7878",
  rosewater: "#dc8a78",
};

export default defineMermaidSetup(() => {
  return {
    theme: "base",
    themeVariables: {
      darkMode: true,
      primaryColor: catppuccinLatte.surface0,
      primaryTextColor: catppuccinLatte.text,
      primaryBorderColor: catppuccinLatte.text,
      lineColor: catppuccinLatte.text,
    },
  };
});
