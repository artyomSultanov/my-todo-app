import React, { useState } from "react";
import MainHeader from "./MainHeader";
import MainBody from "./MainBody";
import "./Main.sass";
import { ITasks } from "./Interfaces";

const Main: React.FC<{ value: string; id: string }> = ({ value, id }) => {
  const [tasks, setTasks] = useState(() => {
    const localTasks = JSON.parse(localStorage.getItem("tasks") as string);
    if (localTasks) return localTasks;
    else
      return {
        id: "my-day",
        todos: [{ label: "New Task", done: false }],
      } as ITasks;
  });

  return (
    <main id={id} className="tasks">
      <MainHeader value={value} />
      <MainBody tasks={tasks} />
    </main>
  );
};

export default Main;
