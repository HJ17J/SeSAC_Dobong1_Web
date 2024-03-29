import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create, done } from '../store/module/todo';

export default function ToDoList() {
  const list = useSelector((state) => state.todo.list);
  const nextID = useSelector((state) => state.todo.nextID);
  const todoList = list.filter((list) => list.done === false);
  const todo = useRef();
  const dispatch = useDispatch();
  return (
    <section className='toDoList'>
      <h3>✅ 오늘의 할 일 </h3>
      <div>
        <input type='text' placeholder='To-do' ref={todo} />
        <button
          onClick={() => {
            dispatch(create({ id: nextID, text: todo.current.value }));
            todo.current.value = '';
          }}
        >
          추가
        </button>
      </div>
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button
                onClick={() => {
                  dispatch(done(todo.id));
                }}
              >
                ✔
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
