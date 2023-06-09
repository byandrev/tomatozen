import { Container, Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Pomodoro from "./components/Pomodoro";

function App() {
  return (
    <Container>
      <Header />
      <Flex justifyContent="center">
        <Pomodoro />
      </Flex>
    </Container>
  );
}

export default App;
