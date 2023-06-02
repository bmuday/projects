const AddTask = ({ value, setValue }) => {
  return (
    <>
      <input
        type="text"
        className="form-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn">
        Add Task
      </button>
    </>
  );
};

export default AddTask;
