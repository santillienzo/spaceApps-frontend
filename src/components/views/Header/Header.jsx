import React from 'react';
import './Header.css'

//Assets
import background from '../../../assets/Background/fondo_welcome.jpg'

const Header = () => {
    return (
        <div className="header-container" id="home">
            <div className="header-present_box">
                <div className="header-text">
                    <h3>La vida con una web es más fácil</h3>
                    <p>Por eso Space te la diseña a tu medida.</p>
                </div>
                <div className="header-btn">
                    Contáctanos
                </div>
            </div>
        </div>
    );
};

export default Header;