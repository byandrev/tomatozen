import { extendTheme } from "@chakra-ui/react";

const colors = {
  white: "#eee",
  brand: "#c95153",
  yellow: "#feb200",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors,
};

const theme = extendTheme(config);

export default theme;
