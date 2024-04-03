import HeaderMenu from '../components/header';
import Container from '../components/lecture/Container';
import EventObject from '../components/lecture/EventObject';
import GenericList from '../components/lecture/GenericList';
import { Props1, Props2, Props3 } from '../components/lecture/Props';
import Text from '../components/lecture/Text';
import ToDoList from '../components/lecture/ToDoList';

export default function Lecture() {
  return (
    <>
      <HeaderMenu />
      <h2>수업 코드</h2>
      <Container>
        {/* <Props1 name='hyeon' />
        <Props2 width='100px' height='100px' color='pink' />
        <Props3 width={100} height={100} text='hello' /> */}
        {/* <Text />
        <EventObject /> */}
        <ToDoList />
        <GenericList />
      </Container>
    </>
  );
}
