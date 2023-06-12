import { useCallback } from "react";
import localStorage from "../utils/localStorage";

function useLocalStorage() {
  const savePomodoro = useCallback((counter) => {
    localStorage.save("counter", counter);
  }, []);

  const getPomodoro = useCallback(() => {
    const result = JSON.parse(localStorage.get("counter"));
    return result ? parseInt(result) : 1;
  }, []);

  return {
    savePomodoro,
    getPomodoro,
  };
}

export default useLocalStorage;