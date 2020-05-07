import React from 'react';

// STYLES
import {Container} from './styles'

// ICONS
import { IoIosMenu , IoMdAdd , IoMdApps } from 'react-icons/io'

function Header() {
  return (
  <Container>
    <button>
      <IoIosMenu size={25} color="rgb(77, 72, 72)" />
    </button>
    <h1>Classroom Clone</h1>

    <div className="groupButtons">
      <button className="addBtn">
        <IoMdAdd size={25} color="rgb(77, 72, 72)" />
      </button>
      <button className="appBtn">
        <IoMdApps size={25}  color="rgb(77, 72, 72)"/>
      </button>
      <img className="imgAvatar" src="https://api.adorable.io/avatars/hi_mom" alt="Adorable Avatar!"/>
    </div>
  </Container>
  );
}

export default Header;
