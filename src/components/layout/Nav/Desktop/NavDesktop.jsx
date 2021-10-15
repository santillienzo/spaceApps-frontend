import React from 'react';
import './NavDesktop.css';

import {
    Link as LinkScroll
} from 'react-scroll'

const NavDesktop = ({logo, setDarkMode}) => {

    return (
        <div className="navDesk-container">
            <div className="navDesk-logo  animate__animated animate__backInRight">
                <img src={logo} alt="Logo Space Apps" />
            </div>
            
            <div className="navDesk-menu">
                <ul className="non-selectable">
                    <div className="nigthDay-container animate__animated animate__backInRight animate__delay-1s">
                        <label>
                            <input type="checkbox" className="input-nigthDay" onClick={(e) => setDarkMode(e.target.checked)}/>
                            <span className="check"></span>
                        </label>
                    </div>
                    <LinkScroll className="link animate__animated animate__backInRight animate__delay-2s" activeClass="activeDesktopLink"  to="home"  spy={true}>Inicio</LinkScroll>
                    <LinkScroll className="link animate__animated animate__backInRight animate__delay-3s" activeClass="activeDesktopLink"  to="about"  spy={true}>Nosotros</LinkScroll>
                    <LinkScroll className="link animate__animated animate__backInRight animate__delay-4s" activeClass="activeDesktopLink"  to="service"  spy={true}>Servicios</LinkScroll>
                    <LinkScroll className="link animate__animated animate__backInRight animate__delay-5s" activeClass="activeDesktopLink"  to="contact"  spy={true}>Contacto</LinkScroll>
                </ul>
            </div>
        </div>
    );
};

export default NavDesktop;