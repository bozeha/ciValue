import React from 'react';
import styled from 'styled-components';
import UsersBox from './conponents/usersBox';


function App() {
  return (
    <StyledApp>
      <UsersBox />
    </StyledApp>
  );
}

export default App;
const StyledApp = styled.div`
  display:flex;
  flext-direction:row;
  justify-content:center;
`