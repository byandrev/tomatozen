import { Flex, Stack, Button, Text } from "@chakra-ui/react";
import useTimer from "../hooks/useTimer";
import usePomodoroCounter from "../hooks/usePomodoroCounter";
import IconRestart from "./IconRestart";

function PomodoroState() {
  const { counter, isFocus } = useTimer();
  const { handleRestartPomodoro } = usePomodoroCounter();

  return (
    <>
      <Flex justifyContent="center" alignItems="center" gap={2}>
        <Text color="gray.500">Pomodoro #{counter}</Text>
        <IconRestart handleClick={handleRestartPomodoro} />
      </Flex>

      <Stack direction="row" justifyContent="center" mb={6}>
        <Button variant="ghost" color={`${isFocus && "brand.base"}`}>
          Focus
        </Button>
        <Button variant="ghost" color={`${!isFocus && "brand.base"}`}>
          Break
        </Button>
      </Stack>
    </>
  );
}

export default PomodoroState;