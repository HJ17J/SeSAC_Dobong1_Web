import Button from './Button';

export default function BlueButton({ text, clickEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor='#5fc4ff'
      subColor='#24a7ff'
      hoverColor='#9fd9ff'
    ></Button>
  );
}
