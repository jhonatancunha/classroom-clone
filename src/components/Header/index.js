import React , { useState } from 'react';
import {Link} from 'react-router-dom'

// STYLES
import { Container , HeaderButton, HeaderAvatar } from './styles'

// ICONS
import {  IoMdAdd , IoMdApps } from 'react-icons/io'

// MENUS
import HamburguerMenu from '../common/SideMenuBar'

import {HamburguerButton} from './style-hamburguer-button'

function Header() {
  const [showHamburguer, setShowHamburguer] = useState(false);

  const onClickHamburguer = (e) => setShowHamburguer(!showHamburguer);

  return (
  <>
    <Container>

      <HamburguerButton show={showHamburguer} onClick={(e) => onClickHamburguer(e)}>
        <div></div>
        <div></div>
        <div></div>
      </HamburguerButton>


      <Link to="/">Classroom Clone</Link>

      <div className="groupButtons">

        <HeaderButton className="addBtn">
          <IoMdAdd size={25} color="rgb(77, 72, 72)" />
        </HeaderButton>

        <HeaderButton className="appBtn">
          <IoMdApps size={25}  color="rgb(77, 72, 72)"/>
        </HeaderButton>

        <HeaderAvatar className="imgAvatar" src="https://api.adorable.io/avatars/hi_mom" alt="Adorable Avatar!"/>
      </div>

    </Container>

    <HamburguerMenu
      hide={showHamburguer} />
  </>
  );
}

export default Header;
