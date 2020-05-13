import styled from 'styled-components'

export const HamburguerButton =  styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  cursor: pointer;

  div{
    height: 5px;
    width: 24px;
    background: rgb(77,72,72);
    margin-top: 3px;
    border-radius: 2px;

    transition: transform ease-in-out .2s;

    :nth-of-type(1){
      transform: ${({show}) => show ? 'rotate(45deg)' : 'rotate(0deg)'};
      position: relative;
      top: ${({show}) => show ? '8px' : '0'};
    }

    :nth-of-type(2){
      transform: ${({show}) => show ? 'translateX(-250%)' : 'translateX(0%)'};
    }

    :nth-of-type(3){
      transform: ${({show}) => show ? 'rotate(-45deg)' : 'rotate(0deg)'};
      position: relative;
      bottom: ${({show}) => show ? '8px' : '0'};
    }
  }

`
