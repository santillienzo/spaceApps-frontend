import React from 'react';
import './Header.css'

//Assets
import svg from '../../../assets/SVG/marketing2.svg'

const Header = () => {
    return (
        <div className="header-container" id="home">
            <div className="header-present_box wow animate__animated animate__fadeIn" data-wow-duration="1.5s">
                <div className="header-text">
                    <h3  data-wow-delay="3s">Todo lo que necesita tu <span>negocio</span></h3>
                    <p>Marketing, diseño web, administración de redes sociales.</p>
                </div>
                <div className="header-btn wow animate__animated animate__rubberBand" data-wow-delay="1.2s">
                    Contáctanos
                </div>
            </div>
            <div className="header-image wow animate__animated animate__fadeIn" data-wow-duration="1.5s">
                <img src={svg} alt=""/>
            </div>
            
        </div>
    );
};

export default Header;