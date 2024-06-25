import { ChakraProvider, Flex } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Flex height="100vh" flexDirection="column">
        <App />
      </Flex>
    </ChakraProvider>
  </React.StrictMode>
);
