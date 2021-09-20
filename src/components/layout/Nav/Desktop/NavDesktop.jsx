import React from 'react';
import './NavDesktop.css';

import {
    Link as LinkScroll 
} from 'react-scroll'

const NavDesktop = ({logo}) => {
    return (
        <div className="navDesk-container">
            <div className="navDesk-logo">
                <img src={logo} alt="" />
            </div>
            <div className="navDesk-menu">
                <ul className="non-selectable">
                    <LinkScroll className="link" to="home" smooth={true} duration={500}>Inicio</LinkScroll>
                    <LinkScroll className="link" to="about" smooth={true} duration={500}>Nosotros</LinkScroll>
                    <LinkScroll className="link" to="service" smooth={true} duration={500}>Servicios</LinkScroll>
                    <LinkScroll className="link" to="works" smooth={true} duration={500}>Clientes</LinkScroll>
                    <LinkScroll className="link" to="contact" smooth={true} duration={500}>Contacto</LinkScroll>
                </ul>
            </div>
        </div>
    );
};

export default NavDesktop;