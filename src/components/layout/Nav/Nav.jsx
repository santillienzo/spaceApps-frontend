import React from 'react';

//Assets
import logo_O from '../../../assets/Logo/Logo_orange.png';


//Components
import NavResponsive from './Responsive/NavResponsive';
import NavDesktop from './Desktop/NavDesktop';

const Nav = ({menuHeightNavToHome, setDarkMode, darkMode}) => {
    if (window.screen.width <= 780) {
        return (
            <NavResponsive logo={logo_O} setDarkMode={setDarkMode} menuHeightNavToHome={menuHeightNavToHome} darkMode={darkMode}/>
        );
    }else{
        return(
            <NavDesktop logo={logo_O} setDarkMode={setDarkMode}/>
        )
    }
};

export default Nav;