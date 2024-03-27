import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
  height: 100vh;
  background-color: #eeedae;
`;
const Name = styled.span`
  color: #a07755;
  font-weight: 600;
`;
const RealName = styled.span`
  color: #55a05f;
  font-weight: 600;
`;
const BackBtn = styled.button``;

export default function Student() {
  const { studentName } = useParams();
  const [name, setName] = useSearchParams('name');
  const back = useNavigate();
  return (
    <Main>
      학생 이름은 <Name>{studentName}</Name>입니다.
      <br />
      {name.get('name') && (
        <>
          실제 학생 이름은 <RealName>{name.get('name')}</RealName>입니다.
          <br />
        </>
      )}
      <BackBtn onClick={() => back(-1)}>⬅ 이전</BackBtn>
    </Main>
  );
}
