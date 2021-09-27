import React from 'react';
import './SocialMedia.css'

const SocialMedia = () => {
    return (
        <div className="socialMedia-container">
            <div className="redes_sociales">
                <ul>
                    <li><a href="https://wa.me/542634786580"><i className="fab fa-whatsapp"></i></a></li>
                    <li><a href="https://www.facebook.com/spaceappsdev"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com/spaceappsdev/?hl=es-la"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://twitter.com/spaceappsdev"><i className="fab fa-twitter"></i></a></li>
                </ul>
            </div>
        </div>
    );
};

export default SocialMedia;