import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import CardPost from '../CardPost/'
import NextTask from '../NextTask'


const Wrapper = styled.div`
  display: flex;
  max-width: 80vw;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export default () => {
  return (
    <>
    <Wrapper>
      <NextTask />
      <CardPost />
      <CardPost />
      <CardPost />
      <CardPost />
    </Wrapper>
    </>
  );
}
