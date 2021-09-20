import React, { useEffect, useState } from 'react';
import './NavResponsive.css'

import {
    Link as LinkScroll 
} from 'react-scroll'

const MenuResponsive = ({close, menuHeight})=>{

    const handleClose = ()=>{
        const menu = document.getElementById('navRes-menu');
        const background = document.getElementById('navRes-background');

        menu.classList.remove("animate__fadeInRightBig");
        background.classList.remove("animate__fadeIn");
        menu.classList.add("animate__fadeOutRightBig")
        background.classList.add("animate__fadeOut")
        setTimeout(()=>{
            close();
        }, 800)
    }

    return (
        <>
        <div className="navRes-menu-container">
            <div className="navRes-background animate__animated animate__fadeIn" onClick={handleClose} id="navRes-background"></div>
            <div className="navRes-menu animate__animated animate__fadeInRightBig animate__fast" id="navRes-menu">
                <div className="navRes-menu_close" style={{height:menuHeight}}>
                    <i className="fas fa-times" onClick={handleClose}></i>
                </div>
                <div className="navRes-menu_container">
                    <nav>
                        <LinkScroll className="li" to="home" smooth duration={500} onClick={handleClose}>Inicio</LinkScroll>
                        <LinkScroll className="li" to="about">Nosotros</LinkScroll>
                        <LinkScroll className="li" to="service">Servicios</LinkScroll>
                        <LinkScroll className="li" to="works">Portafolio</LinkScroll>
                        <LinkScroll className="li" to="contact">Contacto</LinkScroll>
                    </nav>
                </div>
            </div>
        </div>
        </>
    )
}


const NavResponsive = ({logo}) => {
    const [menu, setMenu] = useState(false)
    const [menuHeight, setMenuHeight] = useState(0)

    
    useEffect(()=>{
        const menu_container = document.getElementById('menu-container');
        setMenuHeight(menu_container.clientHeight)
    }, [])

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
                <MenuResponsive close={()=> setMenu(false)} menuHeight={menuHeight}/>
            ):('')
        }
        </>
    );
};

export default NavResponsive;