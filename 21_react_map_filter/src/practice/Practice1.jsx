import { useState } from 'react';

export default function Practice1() {
  const [info, setInfo] = useState([
    { id: 1, name: '코디', email: 'codi@gmail.com' },
    { id: 2, name: '현', email: 'hyeonj0130@gmail.com' },
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  /* 
    info state를 변경시켜 재랜더링 되도록 함
    - 빈 값이 입력되면 alert 띄우기
    - 등록 후에 input 빈칸 만들기
   */
  const addInfo = () => {
    if (!name.trim() || !email.trim()) {
      alert('이름과 이메일 모두 작성해주세요.');
      return;
    }
    setInfo(
      info.concat({
        id: info.length === 0 ? 1 : info[info.length - 1].id + 1,
        name: name,
        email: email,
      })
    );
    setName('');
    setEmail('');
  };

  const enterRegister = (e) => {
    if (e.key === 'Enter') {
      addInfo(name, email);
    }
  };

  const deleteInfo = (id) => {
    const newList = info.filter((info) => info.id !== id);
    setInfo(newList);
  };
  return (
    <div>
      <input
        type='text'
        placeholder='이름'
        id='name'
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <input
        type='email'
        placeholder='이메일'
        id='email'
        onKeyDown={enterRegister}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <button onClick={addInfo}>등록</button>
      <div>
        {info.map((info) => (
          <h3 key={info.id} onDoubleClick={() => deleteInfo(info.id)}>
            {info.name} : {info.email}
          </h3>
        ))}
      </div>
    </div>
  );
}
