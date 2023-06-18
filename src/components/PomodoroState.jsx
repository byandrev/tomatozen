import { Flex, Stack, Button, Text, Icon } from "@chakra-ui/react";
import { RiRestartLine } from "react-icons/ri";
import useTimer from "../hooks/useTimer";
import usePomodoroCounter from "../hooks/usePomodoroCounter";

function PomodoroState() {
  const { counter, isFocus } = useTimer();
  const { handleRestartPomodoro } = usePomodoroCounter();

  return (
    <>
      <Flex justifyContent="center" alignItems="center" gap={2}>
        <Text color="gray.500">Pomodoro #{counter}</Text>
        <Icon
          color="brand.alt"
          as={RiRestartLine}
          fontSize="1rem"
          cursor="pointer"
          onClick={handleRestartPomodoro}
        />
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