import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import theme from "./theme";
import ContextProvider from "./context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
