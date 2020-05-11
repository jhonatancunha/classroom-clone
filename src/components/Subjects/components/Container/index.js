import React, {useState } from 'react'

// COMPONENTS
import Card from '../Card/index'
import ButtonDoubt from '../../../common/ButtonDoubt'

// API
import tasks from '../../../../services/tasks'

// STYLES
import {ContainerStyle} from './styles'


export default function Container() {
  const [subject, setSubject] = useState(tasks);

  return (
      <ContainerStyle>

        {subject.map( (item) => <Card key={item.id} data={item} /> )}

        <ButtonDoubt />

      </ContainerStyle>
     )
  }

