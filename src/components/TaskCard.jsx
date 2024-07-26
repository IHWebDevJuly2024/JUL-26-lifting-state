import "./TaskCard.css";

function TaskCard({
  // DESTRUCTURING LEVEL GOD
  eachTask: { title, description, people_assigned, completed, id },
  toggleCompleted,
}) {
  return (
    <li className="card">
      <h4>{title}</h4>
      <p>{description}</p>
      <h4>Assigned to:</h4>
      <ul className="people-container">
        {people_assigned.map((person, index) => {
          return <li key={index}>{person}</li>;
        })}
      </ul>
      <p>
        Completed:
        <span onClick={() => toggleCompleted(id)}>
          {/* CONDITIONAL RENDERING */}
          {completed ? "✅" : "❌"}
        </span>
      </p>
    </li>
  );
}

export default TaskCard;
