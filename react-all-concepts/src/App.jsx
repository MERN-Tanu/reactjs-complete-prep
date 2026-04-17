import React, { useEffect, useState } from "react";
import "./App.css";
import { addTodo, deleteTodo } from "./features/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import Accordian from "./Accordian/Accordian";
import Comments from "./Reddit-nested-comments/Comments";
import ImageSlider from "./Image-Slider/ImageSlider";

function App() {
  const [input, setInput] = useState(0);

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    // scrollY: how much I have scrolled
    // innerHeight: height of the window(visible section)
    // document.body.scrollHeight: total height of the web page
    console.log(
      "window.scrollY",
      "window.innerHeight",
      "document.body.scrollHeight",
      window.scrollY,
      window.innerHeight,
      document.body.scrollHeight,
    );
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMoreData();
    }
  };

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <div>
        {" "}
        <ImageSlider/>
        {/* <Comments/> */}
        {/* <Accordian /> */}
      </div>

      {/* <h1>Todo App</h1>
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
      </ul> */}
    </div>
  );
}

export default App;
