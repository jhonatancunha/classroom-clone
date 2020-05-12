import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  transform: ${({show}) => show ? 'translateX(0)' : 'translateX(-100%)'};


  transition: transform 0.3s ease-in-out;
`;


export default ({hide}) => {

 console.log(hide);
  return <Menu show={hide}>teste</Menu>
}
