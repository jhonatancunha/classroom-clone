import React,  { useState }  from 'react';
import styled from 'styled-components';

// COMPONENTS
import CardPost from '../CardPost/'
import NextTask from '../NextTask'

// REQUEST COMMENTS
import api from '../../../../services/posts'


const Wrapper = styled.div`
  display: flex;
  max-width: 80vw;
  margin: 0 auto;
  flex-wrap: wrap;
`;



export default (props) => {

  const [post, setPost] = useState(api);

  const postOfIndex = post[props.id-1];

  console.log(postOfIndex);


  return (
    <>
    <Wrapper>
      <NextTask />

      {/* BUSCANDO POST COM ID_SUBJECT IGUAL AO ID PASSADO NA URL COMO PARAMETRO */}
      {postOfIndex.map((item) => (item.id_subject == props.id) ? <CardPost key={item.id_subject} data={item}/>  : "" )}

    </Wrapper>
    </>
  );
}
