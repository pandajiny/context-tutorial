import React, { useState } from "react";
import { useTodosDispatch } from "./TodosContext";

function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useTodosDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    dispatch({ type: "CREATE", text: value });
    e.preventDefault();
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        placeholder="what do you do?"
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit">Regist</button>
    </form>
  );
}

export default TodoForm;
