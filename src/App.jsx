import "./App.css";
import { Routes, Route } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import FormPage from "./pages/FormPage";
import { useState } from "react";
import tasksJson from "./datasets/tasks.json";

function App() {
  const [tasks, setTasks] = useState(tasksJson);

  const result = tasks.reduce((acc, cur) => {
    if (cur.completed) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  return (
    <>
      <h1>Lifting state up</h1>
      <h2>Tasks completed: {result}</h2>
      <Routes>
        <Route
          path="/"
          element={<TasksPage tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/form"
          element={<FormPage tasks={tasks} setTasks={setTasks} />}
        />
      </Routes>
    </>
  );
}

export default App;
