import styled from 'styled-components';

export const Menu = styled.div`
  transform: ${({show}) => show ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.2s ease-in-out;

  z-index: 10;
  position: fixed;
  min-height: 100%;
  background: snow;
  max-width: 16.5rem;
  width: 100%;
  top: 60px;
`;

export const WrapperMenu = styled.ul`
  border-right: 1px solid #ccc;
  height: auto;

  display: flex;
  flex-direction: column;


  a{
    display: flex;
    padding-left: 20px;
    margin-bottom: 2px;
    line-height: 50px;
    text-decoration: none;
    font-weight: 400;
    font-size: 1.2rem;
    color: #4d4848;


    }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 50px;
    white-space: nowrap;
  }

  svg{
    align-self: center;
    margin-right: 10px;
  }

  img{
    margin-right: 10px;
    width: 30px;
    border-radius: 50%;
    height: 30px;
    align-self: center;
  }

  a:hover{
    background-color: #ccc;
  }

  p:nth-of-type(1){
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }

`;


export const LittleTitle = styled.p`
  color: #918d8d;
  margin: 12px 12px;
  font-size: 0.85rem;
  padding-bottom: 10px;
  padding-top: 10px;
  text-align: center;
`

