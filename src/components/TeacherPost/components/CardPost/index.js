import React from 'react';

// ICONS
import { IoMdLink } from 'react-icons/io'

// IMPORTING STYLES
import { Wrapper , Header , Avatar , Informations, PostOwner
       , DateOfPost , Description, ButtonCopyLink } from './styles'


// LINK
import {Link} from 'react-router-dom'

// COMPONENTS
import Comments from '../Comments'
import InputComment from '../InputComment'

export default () => {
  return (
    <>
    <Wrapper>
      <Header>
        <Avatar src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s40-c-fbw=1/photo.jpg"/>

        <Informations>
          <PostOwner>Jhonatan Cunha</PostOwner>
          <DateOfPost>11 de maio de 2020.</DateOfPost>
        </Informations>

        <ButtonCopyLink>
          <IoMdLink size={25} color="#4e4e4e" />
        </ButtonCopyLink>
      </Header>

      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Description>

      <Comments />
      <Comments />
      <Comments />

      <InputComment/>
    </Wrapper>
    </>
  );
}
