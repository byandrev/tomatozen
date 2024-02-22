import { Button, Flex } from "@chakra-ui/react";
import { FaPause, FaPlay, FaUndoAlt } from "react-icons/fa";

import useTimer from "../hooks/useTimer";

function PomodoroActions() {
  const { handleStart, handleStop, handleRestart } = useTimer();

  const handleClickStart = () => {
    handleStart();
  };

  const handleClickRestart = () => {
    handleRestart();
  };

  const handleClickStop = () => {
    handleStop();
  };

  return (
    <Flex justifyContent="center">
      <Button
        variant="ghost"
        color="brand.base"
        leftIcon={<FaUndoAlt />}
        iconSpacing={0}
        fontSize="2rem"
        onClick={handleClickRestart}
      ></Button>
      <Button
        variant="ghost"
        color="brand.base"
        leftIcon={<FaPlay />}
        iconSpacing={0}
        fontSize="2rem"
        onClick={handleClickStart}
      ></Button>
      <Button
        variant="ghost"
        color="brand.base"
        leftIcon={<FaPause />}
        iconSpacing={0}
        fontSize="2rem"
        onClick={handleClickStop}
      ></Button>
    </Flex>
  );
}

export default PomodoroActions;
