import styles from "./TaskItem.module.css"

export default function TaskItem({ task }) {
  return <h3 className={styles.task}>{task}</h3>;
}
