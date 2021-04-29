function Tasks(props) {
  return (
    <>
      <h3 className="matter-h3 matter-secondary-text">My list of Tasks</h3>
      <section className="task-items-wrapper">
        {props.tasks.map((task, index) => (
          <div className="task-item" key={index}>
            <input className="checkbox" type="checkbox" />

            <p className="matter-body1">{task}</p>

            <button
              className="matter-button-text matter-error"
              onClick={() => props.handleDeleteTask(index)}
            >
              ✖
            </button>
          </div>
        ))}
      </section>
    </>
  );
}

export default Tasks;
