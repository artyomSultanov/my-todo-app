import React from "react";
import { ITasks } from "./Interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const MainTasks: React.FC<{ tasks: ITasks }> = ({ tasks }) => {
  return (
    <ul>
      {React.Children.toArray(
        tasks.todos.map((todo: { label: string; done: boolean }) => {
          <li className={todo.done ? "todo-done__li" : ""}>
            <input type="checkbox" />
            <span>{todo.label}</span>
            <FontAwesomeIcon icon={faXmark} />
          </li>;
        })
      )}
    </ul>
  );
};

export default MainTasks;
