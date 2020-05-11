import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-top: 1px solid #ccc;
  margin: 15px;
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  margin-top: 15px;
`;
const Input = styled.input`
  margin-left: 15px;
  margin-top: 15px;
  height: 45px;
  width: 100%;
  font-size: 0.95rem;
  padding: 10px;
  border-radius: 50px;
  border: 1px solid #ccc;
`;

export default () => {
  return(
    <Wrapper>
      <Avatar src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s40-c-fbw=1/photo.jpg" />
      <Input  placeholder="Adicionar comentário para a turma" />
    </Wrapper>
  );
}
