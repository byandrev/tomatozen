import { createContext, useCallback, useEffect, useState } from "react";
import localStorage from "../utils/localStorage";

export const TasksContext = createContext();

export default function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(null);
  const [tasksCompleted, setTasksCompleted] = useState(null);

  const saveTasksInDB = useCallback(() => {
    if (tasks) localStorage.save("tasks", tasks);
  }, [tasks]);

  const saveTasksCompletedInDB = useCallback(() => {
    if (tasksCompleted !== null)
      localStorage.save("tasks_completed", tasksCompleted);
  }, [tasksCompleted]);

  const findTask = (id) => {
    return tasks.findIndex((task) => {
      return task.id === id;
    });
  };

  const addTask = (task) => {
    if (tasks) setTasks(tasks.concat(task));
    else setTasks([task]);
  };

  const updateTask = (index, key, val) => {
    if (index < 0 || index > tasks.length) return;

    const backTasks = [...tasks];
    backTasks[index][key] = val;
    setTasks(backTasks);
  };

  const deleteTask = (id) => {
    const taskIndex = findTask(id);

    if (taskIndex === -1) return;

    const initialTasks = [...tasks];
    initialTasks.splice(taskIndex, 1);
    setTasks(initialTasks);
    setTasksCompleted(tasksCompleted + 1);
  };

  useEffect(() => {
    const tasksSaved = JSON.parse(localStorage.get("tasks"));
    const tasksCompletedSaved = JSON.parse(localStorage.get("tasks_completed"));

    setTasks(tasksSaved);
    setTasksCompleted(tasksCompletedSaved);
  }, []);

  useEffect(() => {
    saveTasksInDB();
  }, [saveTasksInDB]);

  useEffect(() => {
    saveTasksCompletedInDB();
  }, [saveTasksCompletedInDB]);

  const value = {
    tasks,
    addTask,
    updateTask,
    findTask,
    deleteTask,
    tasksCompleted,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}