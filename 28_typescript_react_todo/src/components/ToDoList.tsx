import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create, done } from '../store/module/todo';
import { ReduxState } from '../types/interface';
// import { RootState } from '../store';

export default function ToDoList() {
  const list = useSelector((state: ReduxState) => state.todo.list);
  const nextID = useSelector((state: ReduxState) => state.todo.nextID);
  const todoList = list.filter((list) => list.done === false);
  const todo = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  return (
    <section className='toDoList'>
      <h3>✅ 오늘의 할 일 </h3>
      <div>
        <input type='text' placeholder='To-do' ref={todo} />
        <button
          onClick={() => {
            if (nextID && todo.current) {
              dispatch(create({ id: nextID, text: todo.current.value }));
              todo.current.value = '';
            }
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
