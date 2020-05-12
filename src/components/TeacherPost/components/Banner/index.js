import React , {useState} from 'react'
import styled from 'styled-components';

// ICONS
import { IoIosArrowDown } from 'react-icons/io'

const Banner = styled.div`
  max-width: 80vw;
  margin: 40px auto;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Header = styled.div`
  position: relative;
  max-width: 80vw;
  min-height: 250px;
  background: url(${({background}) => true ? (background): (background)});
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 8px;
`

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

  rotate: ${({status}) => status ? "180deg" : "0deg"};

  transition: rotate ease .2s;
`;

const DetailBanner = styled.div`

  position: relative;
  background: snow;
  box-shadow: 3px 3px 5px #00000057;;
  height: 90px;
  border-radius: 0 0 8px 8px;
  padding: 20px;
  line-height: 30px;


`

export default (props) =>{
  const [showDetail, setShowDetail] = useState(false);

  const onClick = (e) => setShowDetail(!showDetail);

  return (
    <Banner>
      <Header background={props.background}>
        <Title>{props.name}</Title>
        <Teacher>{props.teacher}</Teacher>

        <DetailButton status={showDetail} onClick={ (e) => onClick(e)}>
          <IoIosArrowDown size={25} color="snow" />
        </DetailButton>


      </Header>
      {
        showDetail &&
        <DetailBanner>
          <p><strong>Assunto:</strong> {props.name} </p>
          <p><strong>Sala:</strong> {props.id} </p>
        </DetailBanner>
      }
    </Banner>
  )
}
