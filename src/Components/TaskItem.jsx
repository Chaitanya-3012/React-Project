import { useState } from 'react';
import styles from './TaskItem.module.css';

export default function TaskItem({ task , todos , setTodos}) {
  const [isCompleted, setIsCompleted] = useState(false);

  function onCancel(e) {
    e.preventDefault();
    console.log("Delete is clicked");
    setTodos(todos.filter((item) => item !== task));
  }

  function onComplete(e) {
    e.preventDefault();
    setIsCompleted(!isCompleted);
    console.log("Complete is clicked");
  }

  return (
    <div className={styles.task}>
      <p
        className={`${styles.tasktext} ${isCompleted ? styles.completed : ''}`}
        onClick={(e) => onComplete(e)}
      >
        {task}
      </p>
      <button className={styles.cancel} onClick={(e) => onCancel(e)}>
        X
      </button>
    </div>
  );
}
