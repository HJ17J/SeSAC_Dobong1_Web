import { useSelector } from 'react-redux';

export default function DoneList() {
  const list = useSelector((state) => state.todo.list);
  const doneList = list.filter((list) => list.done === true);
  return (
    <section className='doneList'>
      <h3>⭐ 완료한 일</h3>
      <ul>
        {doneList.map((done) => (
          <li key={done.id}>
            <span>{done.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
