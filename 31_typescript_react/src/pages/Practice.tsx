import { Link } from 'react-router-dom';
import HeaderMenu from '../components/header';
import PostList from '../components/practice/PostList';

export default function Practice() {
  return (
    <>
      <HeaderMenu />
      <br />
      <Link to='matzip'>맛집 페이지</Link>
      <PostList />
    </>
  );
}
