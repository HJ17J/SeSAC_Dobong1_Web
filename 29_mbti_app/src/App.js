import styled from 'styled-components';
import Start from './pages/Start';
import Mbti from './pages/Mbti';
import Result from './pages/Result';
import { useSelector } from 'react-redux';
import GlobalStyle from './components/GlobalStyles';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  const page = useSelector((state) => state.mbti.page);
  const survey = useSelector((state) => state.mbti.survey);
  console.log('page:', page);
  return (
    <>
      <GlobalStyle />
      <Main>{page === 0 ? <Start /> : page !== survey.length + 1 ? <Mbti /> : <Result />}</Main>
    </>
  );
}

export default App;
