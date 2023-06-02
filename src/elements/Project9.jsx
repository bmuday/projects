import { useState } from "react";
import AddTask from "../components/AddTask";
import TasksList from "../components/TasksList";

const Project9 = () => {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");
  const addNewTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, value]);
  };

  return (
    <section className="section-center">
      <div className="Toastify"></div>
      <form onSubmit={addNewTask}>
        <h4>Todo List</h4>
        <div className="form-control">
          <AddTask value={value} setValue={setValue} />
        </div>
      </form>
      <TasksList tasks={tasks} />
    </section>
  );
};

export default Project9;
