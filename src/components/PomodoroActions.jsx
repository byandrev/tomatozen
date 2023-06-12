import { Button, Flex } from "@chakra-ui/react";
import { FaPlay, FaPause, FaUndoAlt } from "react-icons/fa";
import useTimer from "../hooks/useTimer";

function PomodoroActions() {
  const { handleStart, handleStop, handleRestart } = useTimer();

  return (
    <Flex justifyContent="center">
      <Button
        variant="ghost"
        color="brand.base"
        leftIcon={<FaUndoAlt />}
        iconSpacing={0}
        fontSize="2rem"
        onClick={handleRestart}
      ></Button>
      <Button
        variant="ghost"
        color="brand.base"
        leftIcon={<FaPlay />}
        iconSpacing={0}
        fontSize="2rem"
        onClick={handleStart}
      ></Button>
      <Button
        variant="ghost"
        color="brand.base"
        leftIcon={<FaPause />}
        iconSpacing={0}
        fontSize="2rem"
        onClick={handleStop}
      ></Button>
    </Flex>
  );
}

export default PomodoroActions;