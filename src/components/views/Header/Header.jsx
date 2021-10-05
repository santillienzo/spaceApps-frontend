import React from 'react';
import { useEffect } from 'react';
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
            {/* <div className="mouse" style={window.screen.width >=780 ? ({display:"block"}):({display:"none"})}></div> */}

            <div className="header-present_box wow animate__animated animate__fadeIn" data-wow-duration="1.5s">
                <div className="header-text">
                    <h3  data-wow-delay="3s">Todo lo que tu <span>negocio</span> necesita</h3>
                    <p>Marketing, diseño web, administración de redes sociales.</p>
                </div>
                <LinkScroll to='contact' className="header-btn wow animate__animated animate__rubberBand btn-jello-horizontal" data-wow-delay="1.2s" id="btn-header">
                    Contáctanos
                </LinkScroll>
            </div>
            <div className="header-image wow animate__animated animate__fadeIn" data-wow-duration="1.5s">
                <img src={svg} alt=""/>
            </div>
            
        </div>
        </>
    );
};

export default Header;