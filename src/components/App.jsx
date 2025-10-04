import { useState } from "react";
import "../styles/app.css";

function App() {
  const [tasks, setTasks] = useState([
    { task: "Comprar harina, jamón y pan rallado", completed: true },
    { task: "Hacer croquetas ricas", completed: true },
    { task: "Ir a la puerta de un gimnasio", completed: false },
    {
      task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
      completed: false,
    },
  ]);

  const handleIsChecked = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <h1>Mi lista de tareas</h1>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.task}
            <input
              type="checkbox"
              name="taskDone"
              id="taskDone"
              checked={task.completed}
              onChange={() => handleIsChecked(index)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
