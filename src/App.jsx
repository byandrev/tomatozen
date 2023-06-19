import { Container, Divider, Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Pomodoro from "./components/Pomodoro";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";

function App() {
  return (
    <Container>
      <Header />
      <Flex justifyContent="center" mb={16}>
        <Pomodoro />
      </Flex>
      <Tasks />
      <Divider mb={16} border="none" />
      <Footer />
      <Divider mb={16} border="none" />
    </Container>
  );
}

export default App;