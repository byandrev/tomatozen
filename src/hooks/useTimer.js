import { useContext } from "react";
import { Context } from "../context/Context";

function useTimer() {
  const {
    counter,
    timeDisplay,
    isFocus,
    setTime,
    getTimeInSeg,
    startTimer,
    clearTimer,
    running,
    setRunning,
    restartTimer,
  } = useContext(Context);

  const handleStart = () => {
    if (!running) {
      setRunning(true);
      startTimer();
    }
  };

  const handleStop = () => {
    if (running) {
      setTime(getTimeInSeg(timeDisplay));
      clearTimer();
      setRunning(false);
    }
  };

  const handleRestart = () => {
    setRunning(true);
    setTime(null);
    restartTimer();
  };

  return {
    counter,
    timeDisplay,
    isFocus,
    handleStop,
    handleStart,
    handleRestart,
  };
}

export default useTimer;