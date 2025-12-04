import { useState } from 'react';

function AddTaskForm({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    addTask(text);
    setText('');
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите задачу"
      />
      <button onClick={handleSubmit}>Добавить</button>
    </div>
  );
}

export default AddTaskForm;
