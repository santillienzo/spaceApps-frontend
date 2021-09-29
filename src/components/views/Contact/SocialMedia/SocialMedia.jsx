import React from 'react';
import './SocialMedia.css'

const SocialMedia = () => {
    return (
        <div className="socialMedia-container">
            <div className="redes_sociales">
                <ul>
                    <li className="wow animate__animated animate__backInRight" data-wow-delay="0.6s"><a href="https://wa.me/542634786580"><i className="fab fa-whatsapp"></i></a></li>
                    <li className="wow animate__animated animate__backInRight" data-wow-delay="0.8s"><a href="https://www.facebook.com/spaceappsdev"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="wow animate__animated animate__backInRight" data-wow-delay="1s"><a href="https://www.instagram.com/spaceappsdev/?hl=es-la"><i className="fab fa-instagram"></i></a></li>
                    <li className="wow animate__animated animate__backInRight" data-wow-delay="1.2s"><a href="https://twitter.com/spaceappsdev"><i className="fab fa-twitter"></i></a></li>
                </ul>
            </div>
        </div>
    );
};

export default SocialMedia;