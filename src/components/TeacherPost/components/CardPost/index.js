import React from 'react';

import {Link} from 'react-router-dom'

// ICONS
import { IoMdLink } from 'react-icons/io'

// IMPORTING STYLES
import { Wrapper , Header , Avatar , Informations, PostOwner
       , DateOfPost , Description, ButtonCopyLink } from './styles'

// COMPONENTS
import Comments from '../Comments'
import InputComment from '../InputComment'


export default ({data}) => {

  const comments = data.comments;

  return (
    <>
    <Wrapper>
      <Header>
        <Avatar src={data.avatar}/>

        <Informations>

          <PostOwner>{data.teacher}</PostOwner>
          <DateOfPost>{data.date}</DateOfPost>
        </Informations>

        <ButtonCopyLink>
          <IoMdLink size={25} color="#4e4e4e" />
        </ButtonCopyLink>
      </Header>

      <Description> {data.description}  </Description>

      {comments.map( (item) => <Comments key={item.id_comment} data={item} /> )}

      {/* <Comments />
      <Comments />
      <Comments /> */}

      <InputComment/>
    </Wrapper>
    </>
  );
}
