import DoneList from './DoneList';
import ToDoList from './ToDoList';

export default function ListContainer() {
  return (
    <div className='listContainer'>
      <h1>To Do List</h1>
      <ToDoList />
      <DoneList />
    </div>
  );
}
