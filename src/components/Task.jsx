const Task = ({ task }) => {
  return (
    <div className="single-item">
      <input type="checkbox" />
      <p>{task}</p>
      <button className="btn remove-btn">Delete</button>
    </div>
  );
};

export default Task;
