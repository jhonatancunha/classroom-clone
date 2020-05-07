import styled from 'styled-components';

export const ContainerStyle  = styled.div`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: center;

  .btnDoubt{
    position: fixed;
    bottom: 10px;
    left: 10px;
    transition: all 0.2s;
  }

  .btnDoubt:hover{
    border-radius: 50%;
    background: rgba(0,0,0,0.2);
  }

   /* MEDIA QUERIES */

   @media (max-width: 450px)
  {
    .btnDoubt {
      left: 1px;
    }
  }
`;
