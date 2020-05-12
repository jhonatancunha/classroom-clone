import React from 'react';
import styled from 'styled-components';

// ICONS
import { IoMdHome } from 'react-icons/io'

const Menu = styled.div`
  transform: ${({show}) => show ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;

  z-index: 10;
  position: absolute;
  height: 100%;
  background: snow;
  max-width: 16.5rem;
  width: 100%;
`;

const WrapperMenu = styled.ul`
  border-right: 1px solid #ccc;
  height: 100%;
  overflow: auto;

`;

const ItemMenu = styled.li`
  display: flex;
  align-items: center;
  height: 60px;
  padding-left: 20px;

  a{
    margin-left: 20px;
    font-weight: 400;
    font-size: 1.2rem;
    color: #4d4848;
  }

  :hover{
    background-color: #ccc;
  }

  :nth-of-type(1){
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }
`

const LittleTitle = styled.p`
  color: #918d8d;
  margin: 23px 12px;
  font-size: 0.85rem;
`



export default ({hide}) => {

 console.log(hide);
  return (
  <Menu show={hide}>
    <WrapperMenu>

      <ItemMenu>
        <IoMdHome size={30} color="#4d4848" />
        <a>Home</a>
      </ItemMenu>

      <LittleTitle>Materias</LittleTitle>

      <ItemMenu>
        <a>Disciplina 1</a>
      </ItemMenu>


      <ItemMenu>
        <a>Disciplina 2</a>
      </ItemMenu>


      <ItemMenu>
        <a>Disciplina 3</a>
      </ItemMenu>


      <ItemMenu>
        <a>Disciplina 4</a>
      </ItemMenu>


      <ItemMenu>
        <a>Disciplina 5</a>
      </ItemMenu>


      <ItemMenu>
        <a>Disciplina 6</a>
      </ItemMenu>


      <ItemMenu>
        <a>Disciplina 7</a>
      </ItemMenu>


    </WrapperMenu>
  </Menu>)
}
