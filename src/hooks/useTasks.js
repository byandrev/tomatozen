import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

function useTasks() {
  const { tasks, addTask, updateTask, findTask, deleteTask, tasksCompleted } =
    useContext(TasksContext);

  const toggleCompleted = (id) => {
    const initialTaskIndex = findTask(id);

    if (initialTaskIndex !== -1) {
      const initialTask = tasks[initialTaskIndex];
      updateTask(initialTaskIndex, "isCompleted", !initialTask.isCompleted);
    }
  };

  return { tasks, addTask, toggleCompleted, deleteTask, tasksCompleted };
}

export default useTasks;