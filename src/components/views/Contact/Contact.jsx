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
                    <div className="contact-email_img wow animate__animated animate__backInLeft">
                        <img src={email} alt="" />
                    </div>
                    <form action="">
                        <input className="wow animate__animated animate__backInLeft" data-wow-delay="0s" type="text" placeholder="Nombre y apellido"/>
                        <input className="wow animate__animated animate__backInLeft" data-wow-delay="0.1s" type="text" placeholder="Dirección de correo electrónico"/>
                        <input className="wow animate__animated animate__backInLeft" data-wow-delay="0.2s" type="text" placeholder="Número de teléfono"/>
                        <input className="wow animate__animated animate__backInLeft" data-wow-delay="0.3s" type="text" placeholder="Asunto"/>
                        <textarea placeholder="Escribe tu mensaje aquí" className="wow animate__animated animate__backInLeft" data-wow-delay="0.8s"></textarea>
                        <button className="wow animate__animated animate__backInLeft" data-wow-delay="0.4s">Enviar</button>
                    </form>
                </div>
                {
                    window.screen.width >= 780 ?
                    (
                        <div className="socialMedia-container_container">
                            <div className="socialMedia-svg_container wow animate__animated animate__backInRight" data-wow-delay="1.6s">
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