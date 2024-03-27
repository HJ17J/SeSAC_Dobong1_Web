import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h2>Page Not Fount</h2>
      <p>페이지를 찾을 수 없습니다😓</p>
      <Link to='/'>홈으로 이동하기</Link>
    </>
  );
}
