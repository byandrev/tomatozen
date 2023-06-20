import { render, screen } from "@testing-library/react";
import App from "../App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import ContextProvider from "../context/Context";
import TasksProvider from "../context/TasksContext";

function renderApp() {
  return render(
    <ChakraProvider theme={theme}>
      <ContextProvider>
        <TasksProvider>
          <App />
        </TasksProvider>
      </ContextProvider>
    </ChakraProvider>
  );
}

describe("App Component", () => {
  renderApp();
  const title = screen.getByText("TomatoZen");

  test("Renders main page correctly", () => {
    expect(true).toBeTruthy();
  });

  test("Title", () => {
    expect(title).toBeTruthy();
  });
});