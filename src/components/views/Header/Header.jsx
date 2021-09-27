import React from 'react';
import './Header.css'

//Assets
import svg from '../../../assets/SVG/marketing2.svg'

const Header = () => {
    return (
        <div className="header-container" id="home">
            <div className="header-present_box">
                <div className="header-text">
                    <h3>Todo lo que necesita tu <span>negocio</span></h3>
                    <p>Marketing, diseño web, administración de redes sociales.</p>
                </div>
                <div className="header-btn">
                    Contáctanos
                </div>
            </div>
            <div className="header-image">
                <img src={svg} alt="" />
            </div>
            
        </div>
    );
};

export default Header;