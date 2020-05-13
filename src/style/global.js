import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
     @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
      padding-top: 5.7rem;
      background: snow;
      font-family: 'Roboto', sans-serif;

    }

    ul{
      list-style: none;
      text-decoration: none;
    }

    button{
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`;

