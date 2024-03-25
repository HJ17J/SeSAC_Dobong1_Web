import { useState } from 'react';
import useToggle from '../hooks/useToggle';

export default function CustomHook() {
  //   const [isOpen, setIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useToggle(false);
  return (
    <>
      <h3>CustomHook 사용해보기</h3>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Q. 리액트에서 커스텀 훅 만들 수 있나요?
      </div>
      {isOpen && <div>A. 네</div>}
    </>
  );
}
