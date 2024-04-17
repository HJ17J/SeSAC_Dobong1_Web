import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Notice from './Notice';
import Speech from './Speech';

const socket = io.connect('http://localhost:8080', { autoConnect: false });

export default function Chatting2() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };
  const [msgInput, setMsgInput] = useState('');
  const [chatList, setChatList] = useState([
    { type: 'me', content: '내가 작성한 메세지' },
    { type: 'other', content: '다른 사람이 작성한 메세지' },
    { type: 'notice', content: '000님이 입장하셨습니다.' },
  ]);

  const [nicknameInput, setNicknameInput] = useState(''); // input 입력
  const [nickname, setNickname] = useState(null); // 중복체크 후 닉네임 추가

  useEffect(() => {
    initSocketConnect();
  }, []);

  useEffect(() => {
    socket.on('notice', (notice) => {
      const newChatList = [...chatList, { type: 'notice', content: notice }];
      setChatList(newChatList);
    });
  }, [chatList]);

  const join = () => {
    initSocketConnect();
    socket.emit('checkNick', nicknameInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    initSocketConnect();
    socket.on('error', (errMsg) => {
      alert(errMsg);
    });
    socket.on('entrySuccess', (nickname) => {
      setNickname(nickname);
    });
  }, []);
  return (
    <>
      <ul>
        <li>채팅방 UI 만들기</li>
        <li>누가 들어왔는지 공지해주기</li>
        <li>닉네임 받고 중복체크</li>
        <li>퇴장 공고</li>
      </ul>
      {!nickname ? (
        <div className='entry-box'>
          <input
            type='text'
            placeholder='닉네임을 입력해주세요'
            value={nicknameInput}
            onChange={(e) => {
              setNicknameInput(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') join();
            }}
          />
          <button onClick={join}>채팅방 입장</button>
        </div>
      ) : (
        <div className='container'>
          <header>코코아톡🐛</header>
          <section>
            {chatList.map((chat, idx) =>
              chat.type === 'notice' ? <Notice key={idx} chat={chat} /> : <Speech key={idx} chat={chat} />
            )}
          </section>
          <form className='msg-form' id='msg-form' onSubmit={handleSubmit}>
            <select id='dm-select'>{/* <option value="all">전체</option>  */}</select>
            <input
              type='text'
              placeholder='메세지 입력'
              onChange={(e) => setMsgInput(e.target.value)}
              value={msgInput}
            />
            <button>전송</button>
          </form>
        </div>
      )}
    </>
  );
}
