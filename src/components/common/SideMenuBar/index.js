import React, { useState } from 'react';

import {Link} from 'react-router-dom'

// ICONS
import { IoMdHome } from 'react-icons/io'

// STYLES
import {
  Menu,
  WrapperMenu,
  LittleTitle
 } from './styles'

// API
import api from '../../../services/tasks'


export default ({hide}) => {
  const [menuOptions, ] = useState(api);

  return (
  <Menu show={hide}>
    <WrapperMenu>

      <Link to="/">
        <IoMdHome size={30} color="#4d4848" />
        Home
      </Link>

      <LittleTitle>Matérias</LittleTitle>

      {
        menuOptions.map( (menuLine) =>  (
          <Link to={`/tasks/${menuLine.id}`} key={menuLine.id}>
              <img src={menuLine.avatar} alt={menuLine.subject}></img>
              <span>{menuLine.subject}</span>
          </Link>))
      }

    </WrapperMenu>
  </Menu>)
}
