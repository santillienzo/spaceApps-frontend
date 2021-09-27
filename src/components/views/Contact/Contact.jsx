import React from 'react';
import './Contact.css'

import email from "../../../assets/SVG/contact/email.svg"
import mail from "../../../assets/SVG/contact/mail.svg"

import SectionTitle from '../../theme/SectionTitle/SectionTitle';
import SocialMedia from './SocialMedia/SocialMedia';

const Contact = () => {
    return (
        <div id="contact">
            <SectionTitle title="Contacto"/>
            <div className="contact-container">
                <div className="contact-form_container">
                    <div className="contact-email_img">
                        <img src={email} alt="" />
                    </div>
                    <form action="">
                        <input type="text" placeholder="Nombre y apellido"/>
                        <input type="text" placeholder="Dirección de correo electrónico"/>
                        <input type="text" placeholder="Número de teléfono"/>
                        <input type="text" placeholder="Asunto"/>
                        <textarea placeholder="Escribe tu mensaje aquí" ></textarea>
                        <button>Enviar</button>
                    </form>
                </div>
                {
                    window.screen.width >= 780 ?
                    (
                        <div className="socialMedia-container_container">
                            <div className="socialMedia-svg_container">
                                <img src={mail} alt="" />
                            </div>
                            <SocialMedia/>
                        </div>
                    )
                    :
                    (
                    <SocialMedia/>
                    )
                }
            </div>
        </div>
    );
};

export default Contact;