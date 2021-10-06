import React from 'react';
import './Header.css'

import {
    Link as LinkScroll 
} from 'react-scroll'

//Assets
import svg from '../../../assets/SVG/marketing2.svg'

const Header = () => {

    return (
        <>
        <div className="header-container" id="home">
            <div className="header-present_box wow animate__animated animate__fadeIn" data-wow-duration="1.5s">
                <div className="header-text">
                    <h2  data-wow-delay="3s">Todo lo que tu <span>negocio</span> necesita</h2>
                    <h1>Marketing, diseño web, administración de redes sociales.</h1>
                </div>
                <LinkScroll to='contact' className="header-btn wow animate__animated animate__rubberBand btn-jello-horizontal" data-wow-delay="1.2s" id="btn-header">
                    Contáctanos
                </LinkScroll>
            </div>
            <div className="header-image wow animate__animated animate__fadeIn" data-wow-duration="1.5s">
                <img src={svg} alt="Imagen de presentación Space Apps"/>
            </div>
            
        </div>
        </>
    );
};

export default Header;