import styled from 'styled-components';

// WRAPPER
export const Wrapper = styled.section`
  max-width: 55vw;
  min-height: 250px;
  background: snow;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-left: auto;
  margin-bottom: 20px;
  min-width: 10%;
  @media (max-width: 780px){
    max-width: 90vw;
  }

`;

// HEADER STYLES
export const Header = styled.header`
  display: flex;
  padding: 20px;
`;

export const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100%;
`;

export const Informations = styled.div`
  display: flex;

  flex-direction: column;
`;

export const PostOwner = styled.span`
  color: #242424;
  margin-left: 10px;
`;

export const DateOfPost = styled.span`
  font-size: 0.8rem;
  color: #4e4e4e;
  margin-left: 10px;
`;

// DESCRIPTION
export const Description = styled.p`
  padding: 20px;
  padding-top: 0;
  text-align: justify;
  border-bottom: 1px solid #ccc;
  font-size: 0.9rem;
`;

export const ButtonCopyLink = styled.button`
  position: relative;
  margin-left: auto;

`;
