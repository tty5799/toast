import React from 'react';
import styled from 'styled-components';
import { useToast } from './toast/ToastContext';
import { ToastLayout } from './toast/ToastLayout';

function App() {
  const toast = useToast();

  const handleToast = () => {
    toast?.open(<div>hi</div>);
  };

  return (
    <StyledWrapper>
      <button onClick={handleToast}>Toast Button</button>
    </StyledWrapper>
  );
}

export default App;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 200px;
    height: 200px;
    background-color: darksalmon;
    cursor: pointer;
    font-size: 20px;
  }
`;
