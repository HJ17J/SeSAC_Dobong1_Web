import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Notice from './Notice';
import Speech from './Speech';

const socket = io.connect('http://localhost:8080', { autoConnect: false });

export default function Chatting1() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };
  const [msgInput, setMsgInput] = useState('');
  const [chatList, setChatList] = useState([
    { type: 'me', content: '내가 작성한 메세지' },
    { type: 'other', content: '다른 사람이 작성한 메세지' },
    { type: 'notice', content: '000님이 입장하셨습니다.' },
  ]);

  useEffect(() => {
    initSocketConnect();
    // [문제점] newChatList를 만들 때 mount 시점의 chatList만 사용
    // socket.on('notice', (notice) => {
    //   const newChatList = [...chatList, { type: 'notice', content: notice }];
    //   setChatList(newChatList);
    // });
  }, []);

  useEffect(() => {
    socket.on('notice', (notice) => {
      const newChatList = [...chatList, { type: 'notice', content: notice }];
      setChatList(newChatList);
    });
  }, [chatList]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <ul>
        <li>채팅방 UI 만들기</li>
        <li>누가 들어왔는지 공지해주기</li>
      </ul>
      <div className='container'>
        <header>코코아톡🐛</header>
        <section>
          {chatList.map((chat, idx) =>
            chat.type === 'notice' ? (
              <Notice key={idx} chat={chat} />
            ) : (
              <Speech key={idx} chat={chat} />
            )
          )}
        </section>
        <form className='msg-form' id='msg-form' onSubmit={handleSubmit}>
          <select id='dm-select'>{/* <option value="all">전체</option>  */}</select>
          <input
            type='text'
            placeholder='메세지 입력'
            onChange={(e) => setMsgInput(e.target.value)}
          />
          <button>전송</button>
        </form>
      </div>
    </>
  );
}
