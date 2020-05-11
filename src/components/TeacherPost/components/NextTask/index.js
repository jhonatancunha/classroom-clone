import React from 'react';
import styled from 'styled-components'

// STYLES
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 22vw;
  max-width: 250px;

  border: 1px solid #ccc;
  padding: 25px;
  border-radius: 8px;

  @media (max-width: 780px){
    display: none;
  }

`;

const Title = styled.p`
  color: #242424;
  font-size: 1.2rem;
`;

const Informations = styled.p`
  margin-top: 20px;
  color: #4e4e4e;
  font-size: 0.8rem;
  line-height: 20px;
`;

const SeeAllTasks = styled.a`
  text-decoration: none;
  color: #3b3838;
  font-weight: 600;
  position: relative;

  text-align: end;
  font-size: 0.9rem;
  margin-top: 20px;

  :hover{
    text-decoration: underline;
  }
`


export default () => {
  return (
  <Wrapper>
    <Title>Próximas atividades</Title>
    <Informations>Nenhuma atividade para a próxima semana!</Informations>
    <br/>
    <SeeAllTasks href="">Visualizar tudo</SeeAllTasks>
  </Wrapper>
  )
}
