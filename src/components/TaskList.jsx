import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  //Los props son los parámetros de una función que guarda la información
  if (tasks.length === 0) {
    //verifica que la array task tenga elementos
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        There are no tasks yet
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div> //.map sirve para recorrer los json
  );
}

export default TaskList;
