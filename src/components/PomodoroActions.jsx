import { Button, Flex } from "@chakra-ui/react";
import { FaPause, FaPlay, FaUndoAlt } from "react-icons/fa";

import useAudio from "../hooks/useAudio";
import useTimer from "../hooks/useTimer";

function PomodoroActions() {
  const { handleStart, handleStop, handleRestart } = useTimer();
  const { toggle } = useAudio("/click.wav");

  const handleClickStart = () => {
    toggle();
    handleStart();
  };

  const handleClickRestart = () => {
    toggle();
    handleRestart();
  };

  const handleClickStop = () => {
    toggle();
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
