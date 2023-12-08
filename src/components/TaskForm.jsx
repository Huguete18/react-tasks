import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    // handleSubmit tiene que recibe un evento (e)
    e.preventDefault(); //Quita el comportamiento por defecto de los formularios y hace que no se recargue la página y que puedas ver desde la consola
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-900 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3">Create your task</h1>
        <input
          className="bg-slate-100 p-3 w-full mb-2"
          placeholder="Write your task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-100 p-3 w-full mb-2"
          placeholder="Write the description of the task"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-indigo-500 hover:bg-indigo-400 px-3 py-1 text-white">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
