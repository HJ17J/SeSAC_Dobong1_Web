import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MyHeader = styled.header`
  background-color: #e0e4ce;
  display: flex;
  justify-content: flex-end;
  height: 10vh;
  line-height: 10vh;
`;
const MyLink = styled(Link)`
  text-decoration: none;
  color: #5e4f10;
  font-weight: 600;
  padding: 0 10px;
`;

export default function Header() {
  return (
    <MyHeader>
      <MyLink to='/'>홈</MyLink>
      <MyLink to='/student/hyeon'>학생</MyLink>
      <MyLink to='/student/codingon'>코딩온</MyLink>
      <MyLink to='/student/new?name=jisoo'>query</MyLink>
    </MyHeader>
  );
}
