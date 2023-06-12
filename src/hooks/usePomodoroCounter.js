import { useContext } from "react";
import { Context } from "../context/Context";

function usePomodoroCounter() {
  const { setCounter } = useContext(Context);

  const handleRestartPomodoro = () => {
    setCounter(1);
  }

  return {
    handleRestartPomodoro,
  }
}

export default usePomodoroCounter;
