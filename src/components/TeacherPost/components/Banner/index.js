import React from 'react'
import styled from 'styled-components';

// ICONS
import { IoIosArrowDown } from 'react-icons/io'

const Banner = styled.div`
  position: relative;
  margin: 40px auto;
  max-width: 80vw;
  min-height: 250px;
  background: purple;
  border-radius: 8px;
`;

const Title = styled.p`
  padding: 25px 0px 5px 25px;
  font-weight: bold;
  color: snow;
  font-size: 2rem;
`;

const Teacher = styled.p`
  padding-left: 25px;
  color: snow;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const DetailButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
`;

export default () =>{
  return (
    <Banner>
      <Title>ReactJS - StyledComponents - ReactIcons - FlexBox</Title>
      <Teacher>Jhonatan Cunha</Teacher>

      <DetailButton>
        <IoIosArrowDown size={25} color="snow" />
      </DetailButton>
    </Banner>
  )
}
