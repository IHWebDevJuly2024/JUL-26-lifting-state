import "./FormPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormPage({ tasks, setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState([]);
  const [completed, setCompleted] = useState(false);
  // initialization of the hook
  const navigate = useNavigate();

  function createTask(event) {
    event.preventDefault();

    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      completed: completed,
      people_assigned: assignedTo,
    };

    const tasksCopy = structuredClone(tasks);

    tasksCopy.unshift(newTask);

    setTasks(tasksCopy);
    // I want to make the user go back to "/" here
    navigate("/");

    // setTitle(""); // do this if you want to clear the form
  }

  return (
    <form>
      <h3>Create new task</h3>
      <label htmlFor="">Title</label>
      {/* in case we want to set the value in the code  we add the attribute value = state variable */}
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
      />
      <label htmlFor="">Description</label>
      <input
        onChange={(event) => setDescription(event.target.value)}
        type="text"
      />
      <label htmlFor="">Assigned to:</label>
      <input
        onChange={(event) => setAssignedTo(event.target.value.split(","))}
        type="text"
      />
      <div>
        <label htmlFor="">Completed</label>
        <input
          onChange={(event) => setCompleted(event.target.checked)}
          type="checkbox"
        />
      </div>
      <button onClick={createTask}>Create</button>
    </form>
  );
}

export default FormPage;
