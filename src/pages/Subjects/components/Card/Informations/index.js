import React from 'react'

// STYLE
import { Informations } from '../styles'

// ICONS
import { IoIosFolderOpen , IoMdPerson, IoMdMore } from 'react-icons/io'


export default function Information({data}) {
  return (

      <Informations background={data.background}>
        <ul>
          <li>
          <header >
            <p>{data.title}</p>

            <button className="optionsCardBtn">
              <IoMdMore size={25}  color="white"/>
            </button>

            <p>{data.teacher_name}</p>

          </header>

          <div className="whitespace">
            <img src={data.avatar} alt="Adorable!" />
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
      </Informations>


)

}


