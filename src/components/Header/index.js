import React , { useState } from 'react';
import {Link} from 'react-router-dom'

// STYLES
import { Container , HeaderButton, HeaderAvatar } from './styles'

// ICONS
import { IoIosMenu , IoMdAdd , IoMdApps } from 'react-icons/io'

// MENUS
import HamburguerMenu from '../common/MenuHamburguer'

function Header() {
  const [showHamburguer, setShowHamburguer] = useState(false);

  const onClickHamburguer = (e) => setShowHamburguer(!showHamburguer);

  return (
  <>
    <Container>

      <HeaderButton onClick={(e) => onClickHamburguer(e)}>
        <IoIosMenu size={25} color="rgb(77, 72, 72)" />
      </HeaderButton>

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
