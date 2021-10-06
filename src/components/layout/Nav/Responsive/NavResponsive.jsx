import React, { useEffect, useState } from 'react';
import './NavResponsive.css'

import MenuResponsive from './MenuResponsive/MenuResponsive';


const NavResponsive = ({logo, menuHeightNavToHome, setDarkMode, darkMode}) => {
    const [menu, setMenu] = useState(false)
    const [menuHeight, setMenuHeight] = useState(0)

    
    useEffect(()=>{
        const menu_container = document.getElementById('menu-container');
        setMenuHeight(menu_container.clientHeight)
        menuHeightNavToHome(menuHeight)

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [menuHeight])

    return (
        <>
        <div className="navRes-container" id="menu-container">
            <div className="navRes-logo">
                <img src={logo} alt="" />
            </div>
            
            <div className="navRes-navIcon">
                <i className="fas fa-bars" onClick={()=> setMenu(true)}></i>
            </div>
        </div>
        {
            menu ?
            (
                <MenuResponsive darkMode={darkMode} setDarkMode={setDarkMode} close={()=> setMenu(false)} menuHeight={menuHeight}/>
            ):('')
        }
        </>
    );
};

export default NavResponsive;