import React from 'react';
import './Nav.css';

//Assets
import logo_W from '../../../assets/Logo/Logo_blanco.png';
import logo_B from '../../../assets/Logo/Logo_negro.png';
import logo_O from '../../../assets/Logo/Logo_orange.png';


//Components
import NavResponsive from './Responsive/NavResponsive';

const Nav = ({menuHeightNavToHome}) => {
    if (window.screen.width <= 780) {
        return (
            <NavResponsive logo={logo_O} menuHeightNavToHome={menuHeightNavToHome}/>
        );
    }else{
        return(
            <div></div>
        )
    }
};

export default Nav;