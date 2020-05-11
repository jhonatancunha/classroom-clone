import React from 'react'
import styled from 'styled-components'

import {Link} from 'react-router-dom';

// STYLE
import { CardContainer } from './styles'

// ICONS
import { IoIosFolderOpen , IoMdPerson, IoMdMore } from 'react-icons/io'

// const ToolTipText = styled.span`
//   /* visibility: hidden; */
//   color: white;
//   background: black;
//   z-index: 20;

//   padding-left: 10px;
//   padding-right: 10px;
//   padding-top: 5px;
//   padding-bottom: 5px;
//   border-radius: 8px;

//   position: fixed;
//   top: 31px;
//   left: 40px;
// `;

// const ToolTipButton = styled.div`

//   margin: 20px;

//   :hover svg{
//     position : relative;
//     border-radius: 50%;
//     background: #0000001a;
//   }

//   :hover span{
//     visibility: visible;
//   }

//   span::before{
//     content: "";
//     position: absolute;
//     border: 5px solid;
//     border-color: transparent transparent black transparent;
//     top: 100%;
//     left: 50%;
//     top: -36%;
//     left: 50%;


//   }
// `;


export default function Card(item) {
    return (
      <>
      <CardContainer background={item.data.background}>
        <ul>
          <li>
            <header >
              <Link to="tasks">{item.data.subject}</Link>

              <button className="optionsCardBtn">
                <IoMdMore size={25}  color="white"/>
              </button>

              <p>{item.data.teacher_name}</p>



            </header>

            <div className="whitespace">
              <img src={item.data.avatar} alt="Adorable!" />
            </div>

            <div className="footerCard">

          {/* <ToolTipButton>
            <ToolTipText>
              Abrir seu trabalho para "BCC33B - ARQUITETURA E ORGANIZACAO DE COMPUTADORES"
            </ToolTipText>
            <IoIosFolderOpen size={25}  color="rgb(77, 72, 72)"/> */}
          {/* </ToolTipButton> */}

            <button>
              <IoIosFolderOpen size={25}  color="rgb(77, 72, 72)"/>
            </button>

              <button>
                <IoMdPerson size={25}  color="rgb(77, 72, 72)"/>
              </button>

            </div>
          </li>
        </ul>

      </CardContainer>

  </>

    )

}
