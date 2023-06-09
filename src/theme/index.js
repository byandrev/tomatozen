import "@fontsource/ubuntu-mono";

import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: { base: "#c95153", light: "#e66668", alt: "#d9787a" },
  yellow: "#feb200",
};

const fonts = {
  heading: `'Ubuntu Mono', sans-serif`,
  body: `'Ubuntu Mono', sans-serif`,
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors,
  fonts,
};

const theme = extendTheme(config);

export default theme;
