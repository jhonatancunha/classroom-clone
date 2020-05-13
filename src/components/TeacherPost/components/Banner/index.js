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
  background: url(${({background}) => true ? (background): (background)});
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 8px;


`

const Title = styled.p`
  padding: 25px 10px 32px 25px;
  font-weight: bold;
  color: snow;
  font-size: 2rem;

  @media (max-width: 450px) {
    font-size: 1.2rem;
  }
`;

const Teacher = styled.p`
  padding-left: 25px;
  color: snow;
  font-size: 1.2rem;
  text-transform: uppercase;

  padding-bottom: 30px;

  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
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
  height: 100%;
  border-radius: 0 0 8px 8px;
  padding: 20px;
  line-height: 30px;

`

const DivButton = styled.div`
    width: 100%;
    height: 20px;
    position: relative;
    bottom: 0;
`

export default (props) =>{
  const [showDetail, setShowDetail] = useState(false);

  const onClick = (e) => setShowDetail(!showDetail);

  return (
    <Banner>
      <Header background={props.background}>
        <Title>{props.name}</Title>
        <Teacher>{props.teacher}</Teacher>

        <DivButton>
          <DetailButton status={showDetail} onClick={ (e) => onClick(e)}>
              <IoIosArrowDown size={25} color="snow" />
          </DetailButton>
        </DivButton>



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
