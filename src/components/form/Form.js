import React, { useState ,useEffect} from "react";
import "./Form.css";
import { useDispatch } from "react-redux";
import { addTodo, searchFilter } from "../../redux/todos/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

function Form() {
  const dispatch = useDispatch();

  const [task, setTask] = useState("");
  const [color, setColor] = useState("#ff0000");
  const [searchKey, setSearchKey] = useState("");

  const handleSearchKey = (event) => {
    setSearchKey(event.target.value);
  };

  useEffect(() => {
    dispatch(searchFilter(searchKey));
  }, [dispatch, searchKey]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: nanoid(3), task: task, bgcolor: color }));
    setTask("");
  };
  return (
    <form className="todo-form">
      <input
        value={searchKey}
        onChange={handleSearchKey}
        className="new-todo"
        placeholder="Search.."
      ></input>
      <input
        className="new-todo"
        placeholder="Enter your note here.."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        autoFocus
      />
      <input
        type="color"
        id="color"
        name="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={handleSubmit} type="submit" className="btn-submit">
        ADD
      </button>
    </form>
  );
}

export default Form;
