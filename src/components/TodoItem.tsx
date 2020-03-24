import React from "react";
import "./TodoItem.css";

import { useTodosDispatch } from "./TodosContext";

export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
};

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useTodosDispatch();
  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span
        onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}
        className="text"
      >
        {todo.text}{" "}
      </span>
      <span
        onClick={() => dispatch({ type: "REMOVE", id: todo.id })}
        className="remove"
      >
        (X)
      </span>
    </li>
  );
}

export default TodoItem;
