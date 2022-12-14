import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_todo } from "../JS/Actions/ToDosActions";
import "./Add.css"

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const add = (e) => {
    if (task !== "") {
      dispatch(add_todo({ id: Date.now(), description: task, isDone: false }));
      setTask("");
    } else {
      alert("you should write your To Do description");
    }
  };

  return (
    <div style={{ margin: "3%" }}>
      <header className="title">ADD,Edit,Check Your Tasks Make Your Life Easier</header>
      <input
        type="text"
        className="form-control"
        style={{ marginBottom: "3%" }}
        placeholder="To Do description"
        // aria-label="Recipient's username with two button addons"
        onChange={(e) => {
          setTask(e.target.value);
        }}
        value={task}
      />
      <button
        className="btn btn-outline-primary"
        type="button"
        onClick={() => add()}
      >
        Add To Do
      </button>
    </div>
  );
};

export default AddTask;
