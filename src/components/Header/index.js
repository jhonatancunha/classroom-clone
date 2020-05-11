import React from 'react';

// STYLES
import { Container , HeaderButton, HeaderAvatar } from './styles'

// ICONS
import { IoIosMenu , IoMdAdd , IoMdApps } from 'react-icons/io'

function Header() {
  return (
  <Container>
    <HeaderButton>
      <IoIosMenu size={25} color="rgb(77, 72, 72)" />
    </HeaderButton>

    <h1>Classroom Clone</h1>

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
  );
}

export default Header;
