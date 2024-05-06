import styled from 'styled-components';
import { ReactNode } from 'react';

export const ToastLayout = ({ text }: { text: string | ReactNode }) => {
  console.log(text, 'test');
  return <StyledWrapper>{text}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background-color: white;
`;
