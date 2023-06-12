import { Stack } from "@chakra-ui/react";
import PomodoroState from "./PomodoroState";
import PomodoroActions from "./PomodoroActions";
import PomodoroTimer from "./PomodoroTimer";

function Pomodoro() {
  return (
    <Stack>
      <PomodoroState />
      <PomodoroTimer />
      <Stack mt={4}>
        <PomodoroActions />
      </Stack>
    </Stack>
  );
}

export default Pomodoro;