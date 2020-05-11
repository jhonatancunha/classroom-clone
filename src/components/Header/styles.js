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

  h1{
    font-weight: 400;
    font-size: 1.5em;
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

export const HeaderButton = styled.button`
  margin-right: 20px;
  transition: all 0.2s;

  :hover{
    border-radius: 50%;
    background: #0000001a;
  }
`;

export const HeaderAvatar = styled.img`
   border-radius: 50%;
  max-width: 40px;
  max-height: 40px;
  margin-right: 20px;
  cursor: pointer;
`;
