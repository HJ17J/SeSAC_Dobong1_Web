import { GTodo } from '../types/interface';
type T = string | number;
interface Props {
  todos: GTodo<T>[];
  toggle: (id: number) => void;
}

export default function GenericItem({ todos, toggle }: Props) {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li>
            <label>
              <input type='checkbox' onChange={() => toggle(todo.id)} />
              {todo.text}
            </label>
          </li>
        );
      })}
    </ul>
  );
}
