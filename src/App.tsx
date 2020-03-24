import React, { useContext } from "react";
import { TodosContextProvider } from "./components/TodosContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodosContextProvider>
        <TodoForm />
        <TodoList />
      </TodosContextProvider>
    </div>
  );
}

export default App;
