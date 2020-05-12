import React from 'react'
import styled from 'styled-components'

import {Link} from 'react-router-dom';

// STYLE
import { CardContainer } from './styles'

// ICONS
import { IoIosFolderOpen , IoMdPerson, IoMdMore } from 'react-icons/io'


export default function Card(item) {
    return (
      <>
      <CardContainer background={item.data.background}>
        <ul >
          <li>
            <header >
              <Link to={`tasks/${item.data.id}`} >{item.data.subject}</Link>

              <button className="optionsCardBtn">
                <IoMdMore size={25}  color="white"/>
              </button>

              <p>{item.data.teacher_name}</p>



            </header>

            <div className="whitespace">
              <img src={item.data.avatar} alt="Adorable!" />
            </div>

            <div className="footerCard">

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
