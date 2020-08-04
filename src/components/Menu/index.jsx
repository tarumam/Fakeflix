import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
import {Link} from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="Menu">
      <Link to="/home">
        <img src={Logo} alt="Taruflix logo" className="Logo" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  )
}
export default Menu;

//min 50 aula 1