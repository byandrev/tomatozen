import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: { base: "#c95153", light: "#e66668", alt: "#d9787a" },
  yellow: "#feb200",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors,
};

const theme = extendTheme(config);

export default theme;
