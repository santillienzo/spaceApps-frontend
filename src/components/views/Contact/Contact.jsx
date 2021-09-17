import React from 'react';
import './Contact.css'

import mail from "../../../assets/Icons/sobre.png"

import SectionTitle from '../../theme/SectionTitle/SectionTitle';

const Contact = () => {
    return (
        <div id="contact">
            <SectionTitle title="Contacto"/>
            <div className="contact-container">
                <div className="contact-email_img">
                    <img src={mail} alt="" />
                </div>
                <div className="contact-text_ref">
                    <p>Envíanos un e-mail</p>
                </div>
                <div className="contact-form_container">
                    <form action="">
                        <input type="text" placeholder="Nombre y apellido"/>
                        <input type="text" placeholder="Dirección de correo electrónico"/>
                        <input type="text" placeholder="Número de teléfono"/>
                        <input type="text" placeholder="Asunto"/>
                        <textarea placeholder="Escribe tu mensaje aquí" ></textarea>
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
            <div className="socialMedia-container">
                <div className="redes_sociales">
                    <ul>
                        <li><a href="https://wa.me/542634786580"><i className="fab fa-whatsapp"></i></a></li>
                        <li><a href="https://www.facebook.com/spaceappsdev"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://www.instagram.com/spaceappsdev/?hl=es-la"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://twitter.com/spaceappsdev"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCF3KM2RqfJmg-bJLQoOTMuQ"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;