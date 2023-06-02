import Task from "./Task";

const TasksList = ({ tasks }) => {
  return (
    <div className="items">
      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </div>
  );
};

export default TasksList;
