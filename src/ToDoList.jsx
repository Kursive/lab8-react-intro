import ToDoItem from './ToDoItem';

function ToDoList({ tasks, removeTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
