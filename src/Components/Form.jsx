import { useState } from "react";
import TaskItem from "./TaskItem";
import styles from "./Form.module.css";

export default function Form() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function submitEvent(e) {
    e.preventDefault();
    if (todo === "") return;
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <>
      <form className={styles.entry}>
        <input className={styles.entryField}
          value={todo}
          type="text"
          placeholder="Add task"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button 
        className={styles.submitButton}
        onClick={(e) => submitEvent(e)}>ADD</button>
      </form>
      <div className="taskList">
      {todos.map((item) => (
        <TaskItem key="{item}" task={item} todos={todos} setTodos={setTodos} />
      ))}
      </div>
    </>
  );
}
