function ToDoItem({ task, removeTask }) {
  return (
    <li>
      {task.text}
      <button onClick={() => removeTask(task.id)}>
        Удалить
      </button>
    </li>
  );
}

export default ToDoItem;
