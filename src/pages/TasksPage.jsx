import { useState } from "react";
import TaskCard from "../components/TaskCard";

function TasksPage({ tasks, setTasks }) {
  function toggleCompleted(taskId) {
    // I need to create a new array, and set the state to this new array, so my component updates
    const tasksCopy = structuredClone(tasks);
    tasksCopy.forEach((eachTask) => {
      if (eachTask.id === taskId) {
        // we modify the value of that particular task
        eachTask.completed = !eachTask.completed;
      }
    });

    // like this we are telling the component we have some modifications and it's going to update
    setTasks(tasksCopy); // we are UPDATING THE STATE. This causes a re-render (update)
  }

  return (
    <ul>
      {tasks.map((eachTask) => {
        return (
          <TaskCard
            key={eachTask.id}
            eachTask={eachTask}
            toggleCompleted={toggleCompleted}
          />
        );
      })}
    </ul>
  );
}

export default TasksPage;
