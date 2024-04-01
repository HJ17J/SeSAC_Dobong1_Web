import Button from './Button';

export default function PinkButton({ text, clickEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor='#fa74b3'
      subColor='#ff249c'
      hoverColor='#ff9fda'
    ></Button>
  );
}
