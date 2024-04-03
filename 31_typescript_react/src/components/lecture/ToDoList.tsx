import React, { useRef, useState } from 'react';
import ToDoItem from './ToDoItem';
import { Todo } from '../types/interface';

export default function ToDoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const updateTodo = [...todos, { id: Date.now(), text: newTodo, done: false }];
      setTodos(updateTodo);
      setNewTodo('');
      focusInput();
    }
  };
  const toggleComplete = (id: number) => {
    const updateTodo = todos.map((todo) => (id === todo.id ? { ...todo, done: !todo.done } : todo));
    setTodos(updateTodo);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addTodo();
  };
  const focusInput = () => {
    ref.current?.focus();
  };
  return (
    <div>
      <h3>To Do List 📜</h3>
      <input
        type='text'
        placeholder='to do...🖋'
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        value={newTodo}
        ref={ref}
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={focusInput}>Focus</button>
      <h4>✨ To Do</h4>
      <ul>
        {todos
          .filter((todo) => !todo.done)
          .map((el) => {
            return <ToDoItem todo={el} toggle={toggleComplete} key={el.id} />;
          })}
      </ul>
      <h4>✨ Done</h4>
      <ul>
        {todos
          .filter((todo) => todo.done)
          .map((el) => {
            return <li key={el.id}>{el.text}</li>;
          })}
      </ul>
    </div>
  );
}
