import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import BlueButton from '../components/BlueButton';
import { next, check } from '../store/modules/mbti';
import Progress from '../components/Progress';

const Question = styled.p`
  font-size: 1.5rem;
  color: #777;
`;
const Vs = styled.p`
  font-size: 2rem;
  padding-top: 1.5rem;
`;

export default function Mbti() {
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);
  const dispatch = useDispatch();
  console.log(survey);

  return (
    <>
      <p>{survey[page - 1].question}</p>
      <ul>
        {survey[page - 1].answer.map((el, index) => {
          return (
            <>
              <li key={index}>
                <BlueButton
                  text={el.text}
                  clickEvent={() => {
                    dispatch(next());
                    dispatch(check(el.result));
                  }}
                ></BlueButton>
              </li>
              {index === 0 && <Vs>VS</Vs>}
            </>
          );
        })}
      </ul>
      <Progress page={page} maxPage={survey.length} />
    </>
  );
}
