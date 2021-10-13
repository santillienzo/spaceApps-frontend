import React, { useState } from 'react';
import './Contact.css'

import email_img from "../../../assets/SVG/contact/email.svg"
import mail from "../../../assets/SVG/contact/mail.svg"

import SectionTitle from '../../theme/SectionTitle/SectionTitle';
import SocialMedia from './SocialMedia/SocialMedia';
import { createEmails, sendEmail } from '../../../javascript/apiCore';

const Contact = () => {
    //STATES
    const [msgSuccesfuly, setMsgSuccesfully] = useState("")
    const [email,setEmail] = useState({
        name: "",
        email: "",
        phone: "",
        subject:"",
        message:""
    })
    const [dataUsers, setDataUsers] = useState({
        name:"",
        email:"",
        phone:""
    })
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        asunto: /^[a-zA-ZÀ-ÿ!-¿\s]{1,90}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }
    const [field, setField] = useState({
        name: false,
        email:false,
        subject:false
    })


    //FUNCTIONS
    const handleChange = (name, e) =>{
        setEmail({...email, [name]: e.target.value})
        setDataUsers({
            ...dataUsers,
            name: email.name,
            email: email.email,
            phone: email.phone
        })
    }

    const checkForm= (name, e)=>{
        switch (name){
            case "name":
                checkField(expresiones.nombre, e.target, 'name')
            break
            case "email":
                checkField(expresiones.correo, e.target, 'email')
            break
            case "subject":
                checkField(expresiones.asunto, e.target, 'subject')
            break
            default: 
            break;
        }
    }

    const checkField= (expresion, input, campo)=>{
        if (expresion.test(input.value.trim())) {
            setField({...field, [campo]: true})
            document.getElementById(`${campo}`).classList.remove("errorInput");
        }else{
            setField({...field, [campo]: false})
            document.getElementById(`${campo}`).classList.add("errorInput");
        }
    }

    const submitEmail = (e)=>{
        e.preventDefault()

        if (field.name && field.email && field.subject) {
            //SendEmail
            sendEmail(email)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })

            setMsgSuccesfully(true)

            setField({
                name: false,
                email:false,
                subject:false
            })

            //Upload data user in bd
            createEmails(dataUsers)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })

            e.target.reset();
        }else{
            setMsgSuccesfully(false)
        }
    }
    

    return (
        <>
        <div id="contact">
            {
                msgSuccesfuly ?
                (
                <div className="msg_validation">
                    <div className="msg_validation-container msg_success">
                        <div>
                            <p>Mensaje enviado correctamente!</p>
                        </div>
                        <div className="msg_validation-button">
                            <div className="msg_validation-button_btn msg_btn-success" onClick={()=> setMsgSuccesfully("")}>Aceptar</div>
                        </div>
                    </div>
                </div>
                ): msgSuccesfuly === false ?
                (
                <div className="msg_validation">
                    <div className="msg_validation-container msg_error">
                        <div>
                            <p>Usted tiene un error en algún campo. Por favor revíselo!</p>
                        </div>
                        <div className="msg_validation-button">
                            <div className="msg_validation-button_btn msg_btn-error" onClick={()=> setMsgSuccesfully("")}>Aceptar</div>
                        </div>
                    </div>
                </div>
                ):("")
            }
            <SectionTitle title="Contacto"/>
            <div className="contact-container">
                <div className="contact-form_container">
                    <div className="contact-email_img wow animate__animated animate__backInLeft">
                        <img src={email_img} alt="Ilustration send e-mail" />
                    </div>
                    <form onSubmit={submitEmail}>
                        <input className="wow animate__animated animate__backInLeft" data-wow-delay="0s" type="text" placeholder="*Nombre y apellido" id="name"
                            onChange={(e)=>{
                                        checkForm('name', e);
                                        handleChange('name',e);
                                    }}
                        />
                        <input className="wow animate__animated animate__backInLeft" data-wow-delay="0.1s" type="text" placeholder="*Dirección de correo electrónico" id="email"
                            onChange={(e)=>{
                                        checkForm('email', e);
                                        handleChange('email',e);
                                    }}
                        />
                        <input className="wow animate__animated animate__backInLeft" data-wow-delay="0.2s" type="text" placeholder="Número de teléfono" id="phone"
                            onChange={(e)=>{
                                        checkForm('phone', e);
                                        handleChange('phone',e);
                                    }}
                        />
                        <input className="wow animate__animated animate__backInLeft" data-wow-delay="0.3s" type="text" placeholder="*Asunto" id="subject"
                            onChange={(e)=>{
                                        checkForm('subject', e);
                                        handleChange('subject',e);
                                    }}
                        />
                        <textarea placeholder="*Escribe tu mensaje aquí" className="wow animate__animated animate__backInLeft" data-wow-delay="0.8s" id="message"
                        onChange={(e)=>{
                                        checkForm('message', e);
                                        handleChange('message',e);
                                    }}
                        ></textarea>
                        <button className="wow animate__animated animate__backInLeft" data-wow-delay="0.4s">Enviar</button>
                    </form>
                </div>
                {
                    window.screen.width >= 780 ?
                    (
                        <div className="socialMedia-container_container">
                            <div className="socialMedia-svg_container wow animate__animated animate__backInRight" data-wow-delay="1.6s">
                                <img src={mail} alt="Ilustration mailbox on blue stain" />
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
        </>
    );
};

export default Contact;