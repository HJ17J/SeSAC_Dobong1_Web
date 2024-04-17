export default function Speech({ chat }) {
  return (
    <>
      {/* <div className={`speech ${chat.type}`}>
        {chat.type === 'other' && <span className='nickname'>socket.id</span>}
        <span className='msg-box'>다른 사람이 보낸 채팅 내용</span>
      </div> */}
      <div className={`speech ${chat.type} ${chat.isDm ? 'dm' : ''}`}>
        {chat.type === 'other' && <span className='nickname'>{chat.name}</span>}
        <span className='msg-box'>{chat.content}</span>
      </div>
    </>
  );
}
