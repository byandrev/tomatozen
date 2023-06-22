import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import ContextProvider from "../../context/Context";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme";
import PomodoroState from "../../components/PomodoroState";

afterEach(cleanup);

describe("<PomodoroState />", () => {
  let el = (
    <ChakraProvider theme={theme}>
      <ContextProvider>
        <PomodoroState />
      </ContextProvider>
    </ChakraProvider>
  );

  beforeEach(() => {
    render(el);
  });

  test("render focus button", () => {
    expect(screen.queryByText("Focus")).not.toEqual(null);
  });

  test("render break button", () => {
    expect(screen.queryByText("Break")).not.toEqual(null);
  });
});