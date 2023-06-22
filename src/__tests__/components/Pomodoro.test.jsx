import { render, screen, cleanup } from "@testing-library/react";
import ContextProvider from "../../context/Context";
import Pomodoro from "../../components/Pomodoro";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme";

afterEach(cleanup);

describe("<Pomodoro />", () => {
  render(
    <ChakraProvider theme={theme}>
      <ContextProvider>
        <Pomodoro />
      </ContextProvider>
    </ChakraProvider>
  );

  test("Render time 25:00", () => {
    expect(screen.queryByText("25:00")).not.toEqual(null);
  });
});