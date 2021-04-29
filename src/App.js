import "./styles.css";
import { useState } from "react";
import SubmitField from "./components/SubmitField";
import Tasks from "./components/Tasks";

export default function App() {
  const [tasks, setTasks] = useState([
    "Try adding a new task",
    "Try deleting a task"
  ]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((task, taskIndex) => taskIndex !== index));
  };

  return (
    <div className="App">
      <h1 className="matter-h1 matter-primary-text">My To Do app! </h1>
      <SubmitField
        handleAddTask={handleAddTask}
        newTask={newTask}
        setNewTask={setNewTask}
      />
      <Tasks
        newTask={newTask}
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
