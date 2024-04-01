import { useSelector } from 'react-redux';
import Button from './Button';

export default function OrangeButton({ text, clickEvent }) {
  console.log(clickEvent);
  const page = useSelector((state) => state.mbti.page);
  console.log('page?', page);

  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor={'#ffbf5fff'}
      subColor={'#ffa724'}
      hoverColor={'#ffd29f'}
    ></Button>
  );
}
