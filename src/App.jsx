import { useState, useEffect } from 'react';
import AddTaskForm from './AddTaskForm';
import ToDoList from './ToDoList';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (text.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div className="app">
      <h1>Мои задачи</h1>
      <AddTaskForm addTask={addTask} />
      <button onClick={clearAll}>Очистить всё</button>
      <ToDoList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
