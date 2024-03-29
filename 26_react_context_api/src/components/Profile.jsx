import { useContext, useRef } from 'react';
import { AgeContext } from '../context/AgeContext';
import { UserContext } from '../context/UserContext';

export default function Profile() {
  const { name, setName } = useContext(UserContext);
  const { age, setAge } = useContext(AgeContext);
  const nameRef = useRef();
  const ageRef = useRef();
  const changeUserInfo = () => {
    setName(nameRef.current.value);
    setAge(ageRef.current.value);
  };

  return (
    <div>
      <h3>사용자 프로필</h3>
      <p>이름: {name}</p>
      <p>나이: {age}</p>

      <input type='text' placeholder='이름' ref={nameRef} />
      <br />
      <input type='number' placeholder='나이' ref={ageRef} />
      <br />
      <button onClick={changeUserInfo}>변경</button>
    </div>
  );
}
