import React from "react";
import "./TodoList.css";
import { useSelector } from "react-redux";

function TodoList() {
  const items = useSelector((state) => state.todo.items);
  console.log(items);
  return (
    <>
      <ul className="todo-list">
        {items.map((item) => (
          <li
            className="todo-item"
            style={{ backgroundColor: item.bgcolor }}
            key={item.id}
          >
            {item.task}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
