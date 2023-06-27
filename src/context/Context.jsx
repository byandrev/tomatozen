import { useEffect, useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";
import setTitle from "../utils/title";

export const Context = createContext();

export default function ContextProvider({ children }) {
  const [isFocus, setIsFocus] = useState(true);
  const [counter, setCounter] = useState(null);
  const [time, setTime] = useState(null);
  const [timeFocus] = useState(25);
  const [timeBreak] = useState(5);
  const [timeDisplay, setTimeDisplay] = useState(`${timeFocus}:00`);
  const [intervalId, setIntervalId] = useState(0);
  const [running, setRunning] = useState(false);
  const { savePomodoro, getPomodoro } = useLocalStorage();

  const getTimeInSeg = (time) => {
    const splited = time.split(":");
    return parseInt(splited[0])*60 + parseInt(splited[1]);
  }

  const startTimer = (restart = false, timeInMin = (isFocus ? timeFocus : timeBreak)) => {
    let seconds = null;

    if (restart) {
      clearInterval(intervalId);
      setIntervalId(0);
    } else if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }

    if (!restart) seconds = time ? time-1 : timeInMin*60;
    else seconds = timeInMin*60;

    const newIntervalId = setInterval(() => {
      let minutesRemaining = Math.floor(seconds / 60);
      let secondsRemaining = seconds % 60;

      if (secondsRemaining < 10) secondsRemaining = '0' + secondsRemaining;
      setTimeDisplay(minutesRemaining + ":" + secondsRemaining);
      setTitle(minutesRemaining+":"+secondsRemaining);

      seconds--;

      if (seconds < 0) {
        if (!isFocus) {
          setCounter(val => val+1);
        }

        setIsFocus(!isFocus);

        clearInterval(newIntervalId);
        setIntervalId(0);
        setRunning(false);
        setTimeDisplay(`${timeBreak}:00`);
        setTime(null);
        return;
      }
    }, 1000);

    setIntervalId(newIntervalId);
  };

  const clearTimer = () => {
    startTimer();
  }

  const restartTimer = () => {
    startTimer(true);
  }

  useEffect(() => {
    const ans = getPomodoro();
    if (ans) setCounter(ans);
  }, [getPomodoro]);

  useEffect(() => {
    if (counter) savePomodoro(counter);
  }, [counter, savePomodoro]);

  const value = {
    counter,
    isFocus,
    timeDisplay,
    setIsFocus,
    startTimer,
    setTime,
    getTimeInSeg,
    clearTimer,
    running,
    setRunning,
    restartTimer,
    setCounter,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

ContextProvider.propTypes = {
  children: PropTypes.node,
};