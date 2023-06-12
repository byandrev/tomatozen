import { Stack, Button, Text } from "@chakra-ui/react";
import useTimer from "../hooks/useTimer";

function PomodoroState() {
  const { counter, isFocus } = useTimer();

  return (
    <>
      <Text textAlign="center" color="gray.500">Pomodoro #{counter}</Text>
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