import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  border: 1px solid grey;
  padding: 0.5rem;
  margin: 1rem 0 5rem;
`;

const H4Title = styled.h4`
  color: #bbbbbb;
`;

const ParentDiv = styled.div`
  background-color: lavender;
`;

const rotate = keyframes`
    0%{transform: rotate(0)}
    50%{transform: rotate(180deg);color:black;}
    100%{transform:rotate(360deg)}
`;

const Child = styled.span`
  /* 가로 길이 780px 이하이면서, 기기 방향이 세로인 경우 */
  @media screen and (max-width: 780px) and (orientation: portrait) {
    font-size: 30px;
    color: orange;
  }
  /* 가로 길이 780px 이하이면서, 기기 방향이 가로인 경우 */
  @media screen and (max-width: 780px) and (orientation: landscape) {
    font-size: 40px;
    color: green;
  }
  background-color: lightblue;
  /* color: aliceblue; */
  color: ${(props) => (props.color ? props.color : 'aliceblue')};
  font-size: 24px;
  font-weight: 700;
  &:hover {
    color: #b48e5b;
    cursor: pointer;
    animation: ${rotate} 1s infinite linear;
  }
`;

function StyledComp() {
  return (
    <Container>
      <H4Title>styled-components 이용</H4Title>
      <ParentDiv>
        <Child color='blue'>child1</Child>
        <Child>child2</Child>
        <Child>child3</Child>
      </ParentDiv>
    </Container>
  );
}

export default StyledComp;
