import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PinkButton from '../components/PinkButton';
import { reset } from '../store/modules/mbti';

const Header = styled.header`
  font-size: 3rem;
`;
const Explanation = styled.p`
  font-size: 1.5rem;
  color: #777;
`;
const MbtiResult = styled.p`
  font-size: 3rem;
  color: skyblue;
  /* transform: translateX(-35px); */
`;
const Additional = styled.p`
  font-size: 2rem;
  color: orange;
`;
const AdditionalImg = styled.img`
  width: 500px;
  transform: translateX(-35px);
`;

export default function Result() {
  const mbti = useSelector((state) => state.mbti.mbtiResult);
  const explanation = useSelector((state) => state.mbti.explanations[mbti]);
  const dispatch = useDispatch();
  return (
    <>
      <Header>당신의 MBTI 결과</Header>
      <Explanation>{explanation.text}</Explanation>
      <MbtiResult>{mbti}</MbtiResult>
      <Additional>이건 재미로 읽어보세요!</Additional>
      <AdditionalImg
        src={`${process.env.PUBLIC_URL}${explanation.img}`}
        alt={`${mbti}에 대한 설명`}
      />
      <PinkButton text='다시 검사하기' clickEvent={() => dispatch(reset())} />
    </>
  );
}
