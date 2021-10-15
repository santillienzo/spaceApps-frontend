import React from 'react';
import './MenuResponsive.css'

import {
    Link as LinkScroll 
} from 'react-scroll'

import { Link } from 'react-router-dom';

import { Route } from 'react-router';
import { signout } from '../../../../../javascript/adminUserService';

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

    const adminSignout = ()=>{
        if (window.confirm("¿Deseas cerrar sesión?")) {
            signout(()=>{
                window.location.href="/";
            });
            
        }
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
                        <Route path="/" exact>
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
                        </Route>
                        <Route path="/admin">
                            <Link className="li" to="/" onClick={handleClose}><i className="fas fa-chevron-circle-left"></i> Inicio</Link>
                            <Link className="li" to="/admin" onClick={handleClose}><i className="fas fa-user-friends"></i> Correos</Link>
                            <div className="li" to="/admin" onClick={adminSignout}><i className="fas fa-sign-out-alt"></i> Cerrar sesión</div>
                            <div className="nigthDay-container">
                                <label>
                                    <input type="checkbox" className="input-nigthDay" onChange={changeTheme} checked={darkMode}/>
                                    <span className="check"></span>
                                </label>
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