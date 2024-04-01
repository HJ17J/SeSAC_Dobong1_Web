import styled from 'styled-components';

const ProgressContainer = styled.div`
  margin-top: 3rem;
`;
const Fill = styled.div`
  width: 100%;
  height: 14px;
  background-color: #777;
`;
const Guage = styled.div`
  background-color: skyblue;
  width: ${(props) => props.percent}%;
  height: 100%;
  transition: 0.4s;
`;

export default function Progress({ page, maxPage }) {
  return (
    <ProgressContainer>
      <div>
        {page}/{maxPage}
      </div>
      <Fill>
        <Guage percent={(page / maxPage) * 100}></Guage>
      </Fill>
    </ProgressContainer>
  );
}
