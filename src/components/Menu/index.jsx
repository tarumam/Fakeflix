import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/home">
        <img src={Logo} alt="Taruflix logo" className="Logo" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  )
}
export default Menu;

//min 50 aula 1