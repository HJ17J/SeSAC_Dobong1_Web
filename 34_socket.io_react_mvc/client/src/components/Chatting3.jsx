import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import io from 'socket.io-client';
import Notice from './Notice';
import Speech from './Speech';

const socket = io.connect('http://localhost:8080', { autoConnect: false });

export default function Chatting3() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  const [msgInput, setMsgInput] = useState('');
  const [chatList, setChatList] = useState([
    // { type: 'me', content: '내가 작성한 메세지' },
    // { type: 'other', content: '다른 사람이 작성한 메세지' },
    // { type: 'notice', content: '000님이 입장하셨습니다.' },
  ]);
  const [nicknameInput, setNicknameInput] = useState(''); // input
  const [nickname, setNickname] = useState(null); // 내 닉네임을 관리
  const [userList, setUserList] = useState({}); // 전체 클라이언트 닉네임 정보 관리
  const [dmTo, setDmTo] = useState('all'); // DM 관련 state

  // useEffect(() => {
  //   initSocketConnect();
  // }, []);

  const join = () => {
    initSocketConnect();
    socket.emit('checkNick', nicknameInput);
  };

  useEffect(() => {
    socket.on('notice', (notice) => {
      const newChatList = [...chatList, { type: 'notice', content: notice }];
      setChatList(newChatList);
    });
  }, [chatList]);

  useEffect(() => {
    initSocketConnect();
    socket.on('error', (errMsg) => {
      alert(errMsg);
    });
    socket.on('entrySuccess', (nickname) => {
      setNickname(nickname);
    });
    socket.on('updateNicks', (nickInfo) => {
      setUserList(nickInfo);
    });
  }, []);

  // option 만들기
  const userOptions = useMemo(() => {
    const options = [];
    for (let key in userList) {
      if (key !== socket.id) options.push(<option value={key}>{userList[key]}</option>);
    }
    console.log(userList);
    return options;
  }, [userList]);

  // 메세지 보내기
  const handleSubmit = (e) => {
    e.preventDefault();
    if (msgInput.trim() === '') return setMsgInput('');
    const sendData = {
      myNick: nickname,
      dm: dmTo,
      msg: msgInput,
    };
    console.log('msg 보냄', sendData);
    socket.emit('send', sendData);
    setMsgInput('');
  };

  const addChatList = useCallback(
    (data) => {
      // socket.on('message', (data) => {
      console.log('msg 받음', data);
      const type = data.id === nickname ? 'me' : 'other';
      const content = `${data.isDm ? '[DM]' : ''} ${data.message}`;
      const isDm = data.isDm;
      const newChatList = [...chatList, { type: type, content: content, isDm: isDm, name: data.id }];
      setChatList(newChatList);
      // });
    },
    [chatList, nickname]
  ); // 처음에는 nickname이 제대로 설정되지 않아 다른 사람이 보낸 것으로 설정됨

  useEffect(() => {
    socket.on('message', addChatList);
  }, [addChatList]);

  const scrollDiv = useRef(null);
  useEffect(() => {
    scrollDiv.current?.scrollIntoView({ behavior: 'auto' });
  }, [chatList]);
  return (
    <>
      {/* <ul>
        <li>채팅방 UI 만들기</li>
        <li>누가 들어왔는지 공지해주기</li>
        <li>닉네임 받고 중복체크</li>
        <li>퇴장 공고</li>
        <li>메세지 보내기</li>
        <li>DM 보내기</li>
      </ul> */}
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
        <div className='container' ref={scrollDiv}>
          <header>코코아톡🐛</header>
          <section>
            {chatList.map((chat, idx) =>
              chat.type === 'notice' ? <Notice key={idx} chat={chat} /> : <Speech key={idx} chat={chat} />
            )}
          </section>
          <form className='msg-form' id='msg-form' onSubmit={handleSubmit}>
            <select id='dm-select' onChange={(e) => setDmTo(e.target.value)}>
              <option value='all'>전체</option>
              {userOptions}
            </select>
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
