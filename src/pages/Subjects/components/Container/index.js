import React, {useState } from 'react'

// COMPONENTS
import Card from '../Card/index'

// ICONS
import { IoMdHelpCircleOutline } from 'react-icons/io'

// API
import { loadLists } from '../../../../services/api'

// STYLES
import {ContainerStyle} from './styles'

const data = loadLists();

export default function Container() {
  const [subject, setSubject] = useState(data);


  return (
      <ContainerStyle>
        {subject.map((item) => (
          <Card key={item.id} data={item} />
        )
        )}


        <button className="btnDoubt">
          <IoMdHelpCircleOutline size={25}  color="rgb(77, 72, 72)" />
        </button>

      </ContainerStyle>
     )
  }

