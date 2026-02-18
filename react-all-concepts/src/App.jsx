import React, { useState } from "react";
import "./App.css";
import { addTodo, deleteTodo } from "./features/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [input, setInput] = useState(0);

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
