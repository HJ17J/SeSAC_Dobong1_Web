import { useSelector } from 'react-redux';
import { ReduxState, Todo } from '../types/interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { RootState } from '../store';

export default function DoneList() {
  const doneList = useSelector((state: ReduxState) => state.todo.list).filter(
    (el) => el.done === true
  );
  // const list = useSelector((state: ReduxState) => state.todo.list);
  // const doneList = list.filter((list) => list.done === true);
  return (
    <section className='doneList'>
      <h3>⭐ 완료한 일</h3>
      {doneList.length === 0 ? (
        <p>다 한 게 없어요 😞</p>
      ) : (
        <ul>
          {doneList.map((done: Todo) => (
            <li key={done.id}>
              <span>{done.text}</span>
              <span>
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
