function SubmitField(props) {
  const handleChange = (value) => {
    props.setNewTask(value);
  };

  return (
    <>
      <label className="matter-textfield-standard">
        <input
          className="matter-textfield-standard"
          type="text"
          name="Enter here"
          placeholder=" "
          value={props.newTask}
          onChange={(e) => handleChange(e.target.value)}
        />
        <span>Enter here a new task</span>
      </label>
      <button
        className="matter-button-contained"
        onClick={() => props.handleAddTask(props.newTask)}
      >
        Submit
      </button>
    </>
  );
}

export default SubmitField;
