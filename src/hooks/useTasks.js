import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

function useTasks() {
  const {
    tasks,
    addTask,
    updateTask,
    findTask,
    deleteTask,
    tasksCompleted,
    setTasksCompleted,
  } = useContext(TasksContext);

  const toggleCompleted = (id) => {
    const initialTaskIndex = findTask(id);

    if (initialTaskIndex !== -1) {
      const initialTask = tasks[initialTaskIndex];
      updateTask(initialTaskIndex, "isCompleted", !initialTask.isCompleted);
    }
  };

  const restartTasks = () => {
    setTasksCompleted(0);
  };

  return {
    tasks,
    addTask,
    toggleCompleted,
    deleteTask,
    tasksCompleted,
    restartTasks,
  };
}

export default useTasks;