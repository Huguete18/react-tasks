import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";
import PropTypes from "prop-types";

TaskContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]); //useState sirve para guardar datos y modificarlos con su función

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    //función a ejecutar cuando se pida
    setTasks(data);
  }, []); //, [] significa que se ejecuta una sola vez

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
