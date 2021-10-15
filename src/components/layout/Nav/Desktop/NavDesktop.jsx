import React from 'react';
import './NavDesktop.css';

import {
    Link as LinkScroll
} from 'react-scroll'
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { signout } from '../../../../javascript/adminUserService';

const NavDesktop = ({logo, setDarkMode}) => {

    const adminSignout = ()=>{
        if (window.confirm("¿Deseas cerrar sesión?")) {
            signout(()=>{
                window.location.href="/";
            });
            
        }
    }

    return (
        <div className="navDesk-container">
            <div className="navDesk-logo  animate__animated animate__backInRight">
                <img src={logo} alt="Logo Space Apps" />
            </div>
            
            <div className="navDesk-menu">
                <ul className="non-selectable">
                    <Route path="/" exact>
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
                    </Route>
                    <Route path="/admin">
                        <div className="nigthDay-container animate__animated animate__backInRight animate__delay-1s">
                            <label>
                                <input type="checkbox" className="input-nigthDay" onClick={(e) => setDarkMode(e.target.checked)}/>
                                <span className="check"></span>
                            </label>
                        </div>
                        <Link className="link animate__animated animate__backInRight animate__delay-2s"  to="/">Inicio</Link>
                        <div className="link animate__animated animate__backInRight animate__delay-2s" onClick={()=> adminSignout()}>Cerrar Sesión</div>
                    </Route>
                </ul>
            </div>
        </div>
    );
};

export default NavDesktop;