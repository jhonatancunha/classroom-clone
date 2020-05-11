import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  margin: 30px;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 10px 10px 0 0;
  border: 1px solid #ccc;


  cursor: pointer;
  transition: box-shadow 0.2s;

  :hover {
    box-shadow: 4px 4px 5px #0000001a;
  }


  header{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 300px;
    min-height: 100px;

    background-image: url(${(props) => true ? (props.background) : (props.background)});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px 10px 5px 5px;
  }

  header a {

    max-width: 75%;
    min-width: 220px;
    text-decoration: none;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: white;
    margin: 15px;
    font-weight: bold;
    font-size: 1.1rem;

    :hover{
      text-decoration: underline;
    }

  }

  header p{
    margin: 15px;
    color: white;
    font-size: 0.9rem;
    font-weight: 500;
  }

  img{
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-top: -2.5rem;
  margin-right: 1.2rem;
  }

  /* IMG CONFIGURATION IN THE MIDDLE */
  .whitespace {
    min-height: 150px;
    display: flex;
    justify-content: flex-end;
  }

  /* FOOTER OF CARD */

  .footerCard{
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid #ccc;
  }

  .footerCard button {
    margin: 15px;
    transition: all 0.2s;
  }

  .footerCard button:hover {
    border-radius: 50%;
    background: #0000001a;
  }
`;


// export const Link = styled.a``;
