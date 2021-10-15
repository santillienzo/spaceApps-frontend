import React from 'react';
import './MenuResponsive.css'

import {
    Link as LinkScroll 
} from 'react-scroll'
import { Route } from 'react-router';

const MenuResponsive = ({close, menuHeight, setDarkMode, darkMode})=>{

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

    const changeTheme = (e)=>{
        setDarkMode(e.target.checked)
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
                        <LinkScroll className="li" to="home" onClick={handleClose} activeClass="activeResponsiveLink" spy>Inicio</LinkScroll>
                        <LinkScroll className="li" to="about" onClick={handleClose} activeClass="activeResponsiveLink" spy>Nosotros</LinkScroll>
                        <LinkScroll className="li" to="service" onClick={handleClose} activeClass="activeResponsiveLink" spy>Servicios</LinkScroll>
                        <LinkScroll className="li" to="contact" onClick={handleClose} activeClass="activeResponsiveLink" spy>Contacto</LinkScroll>
                        <div className="nigthDay-container">
                            <label>
                                <input type="checkbox" className="input-nigthDay" onChange={changeTheme} checked={darkMode}/>
                                <span className="check"></span>
                            </label>
                        </div>
                        <Route path="/admin">
                            <div className="admin-dashboard-navRes">
                                <LinkScroll className="li" to="home" onClick={handleClose} activeClass="activeResponsiveLink" spy>Datos de clientes</LinkScroll>
                            </div>

                        </Route>
                    </nav>
                </div>
            </div>
        </div>
        </>
    )
}

export default MenuResponsive;