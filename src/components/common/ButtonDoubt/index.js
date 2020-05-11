import React from 'react';
import styled from 'styled-components';

// ICONS
import { IoMdHelpCircleOutline } from 'react-icons/io';

// STYLES
const ButtonDoubt = styled.button`
  position: fixed;
  bottom: 10px;
  left: 10px;
  transition: all 0.2s;
  cursor: pointer;


  :hover{
    border-radius: 50%;
    background: rgba(0,0,0,0.2);
  }
`;

export default () => {
  return (
      <ButtonDoubt>
          <IoMdHelpCircleOutline size={25}  color="rgb(77, 72, 72)" />
      </ButtonDoubt>
  );
}
