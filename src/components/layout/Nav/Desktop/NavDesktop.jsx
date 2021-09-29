import React from 'react';
import './NavDesktop.css';

import {
    Link as LinkScroll , animateScroll as scroll
} from 'react-scroll'

const NavDesktop = ({logo, setDarkMode}) => {


    return (
        <div className="navDesk-container">
            <div className="navDesk-logo wow animate__animated animate__backInRight">
                <img src={logo} alt="" />
            </div>
            <div className="navDesk-menu">
                <ul className="non-selectable">
                    <div className="nigthDay-container wow animate__animated animate__backInRight">
                        <label>
                            <input type="checkbox" className="input-nigthDay" onClick={(e) => setDarkMode(e.target.checked)}/>
                            <span className="check"></span>
                        </label>
                    </div>
                    <LinkScroll className="link wow animate__animated animate__backInRight" activeClass="activeDesktopLink" data-wow-delay="0.2s" to="home"  spy={true}>Inicio</LinkScroll>
                    <LinkScroll className="link wow animate__animated animate__backInRight" activeClass="activeDesktopLink" data-wow-delay="0.3s" to="about"  spy={true}>Nosotros</LinkScroll>
                    <LinkScroll className="link wow animate__animated animate__backInRight" activeClass="activeDesktopLink" data-wow-delay="0.4s" to="service"  spy={true}>Servicios</LinkScroll>
                    <LinkScroll className="link wow animate__animated animate__backInRight" activeClass="activeDesktopLink" data-wow-delay="0.5s" to="contact"  spy={true}>Contacto</LinkScroll>
                    {/* <LinkScroll className="link" to="works" smooth={true} duration={500}>Clientes</LinkScroll> */}
                </ul>
            </div>
        </div>
    );
};

export default NavDesktop;