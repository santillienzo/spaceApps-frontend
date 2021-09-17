import React from 'react';
import './Nav.css';

//Assets
import logo from '../../../assets/Logo/Logo_blanco.png';

//Components
import NavResponsive from './Responsive/NavResponsive';

const Nav = () => {
    if (window.screen.width <= 780) {
        return (
            <NavResponsive logo={logo}/>
        );
    }else{
        return(
            <div></div>
        )
    }
};

export default Nav;