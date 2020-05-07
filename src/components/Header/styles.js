import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  height: 60px;
  align-items: center;
  padding-left: 20px;

  border-bottom: 1px solid #ccc;

  .groupButtons{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
  }

  .groupButtons button{
    margin-right: 20px;
  }

  h1{
    margin-left: 20px;
    font-weight: 400;
    font-size: 1.5em;
  }

  img{
    border-radius: 50%;
    max-width: 40px;
    max-height: 40px;
    margin-right: 20px;
    cursor: pointer;
  }

  /* MEDIA QUERIES */

  @media (max-width: 450px)
  {
    .appBtn,
    .imgAvatar {
      display: none;
    }
  }

`;
