import styled, { keyframes } from 'styled-components';

const App = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const logoSpin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${logoSpin} infinite 20s linear;
  }
`;

const AppText = styled.p`
  margin: 50px 0px;
`;

const AppLink = styled.a`
  color: #61dafb;
`;

export default function Practice() {
  return (
    <App>
      <AppHeader>
        <AppLogo src={'logo512.png'}></AppLogo>
        <AppText>
          Edit <code>src/App.js</code> and save to reload.
        </AppText>
        <AppLink href='https://reactjs.org' target='_blank'>
          Learn React
        </AppLink>
      </AppHeader>
    </App>
  );
}
