import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8080', { autoConnect: false });
export default function Practice1() {
  const [fromServerStr, setFromServerStr] = useState('');

  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
    console.log(socket.connected);
  };

  useEffect(() => {
    initSocketConnect();
  }, []);

  //   useEffect(() => {
  //     socket.on('helloMsg', (msg) => {
  //       setFromServerStr(msg);
  //     });
  //     socket.on('studyMsg', (msg) => {
  //       setFromServerStr(msg);
  //     });
  //     socket.on('byeMsg', (msg) => {
  //       setFromServerStr(msg);
  //     });
  //   }, [socket]);

  //   const btnClicked = (btnName) => {
  //     socket.emit('btnClicked', btnName);
  //     socket.on('btnMessage', (data) => {
  //       setFromServerStr(data.msg);
  //     });
  //   };

  const btnHello = () => {
    socket.emit('hello');
    socket.on('helloMsg', (msg) => {
      setFromServerStr(msg);
    });
  };
  const btnStudy = () => {
    socket.emit('study');
    socket.on('studyMsg', (msg) => {
      setFromServerStr(msg);
    });
  };
  const btnBye = () => {
    socket.emit('bye');
    socket.on('byeMsg', (msg) => {
      setFromServerStr(msg);
    });
  };

  return (
    <>
      {/* <button onClick={btnClicked('hello')}>hello</button>
      <button onClick={btnClicked('study')}>study</button>
      <button onClick={btnClicked('bye')}>bye</button> */}
      <button onClick={btnHello}>hello</button>
      <button onClick={btnStudy}>study</button>
      <button onClick={btnBye}>bye</button>
      <h3>{fromServerStr}</h3>
    </>
  );
}
