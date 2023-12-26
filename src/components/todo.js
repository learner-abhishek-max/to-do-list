import React from "react";
import { useState } from "react";
import "./todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div>
      <div className="container">
        <h2 className="heading">Todo List</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
