import React from 'react';
import './ModalService.css'

import { Link as LinkScroll} from 'react-scroll';

const ModalService = ({description, image, title, close})=>{

    const handleClose = ()=>{

        const modal = document.getElementById('modalService-modal');
        const background = document.getElementById('modalService-background');

        modal.classList.remove("animate__fadeInLeftBig");
        background.classList.remove("animate__fadeIn");
        modal.classList.add("animate__fadeOutLeftBig")
        background.classList.add("animate__fadeOut")
        setTimeout(()=>{
            close();
        }, 800)
    }

    return(
        <div className="modalService-container">
            <div className="modalService-background animate__animated animate__fadeIn" onClick={handleClose} id="modalService-background"></div>
            <div className="modalService-modal animate__animated animate__fadeInLeftBig animate__fast" id="modalService-modal">
                <div className="modalService-close">
                    <i className="fas fa-times" onClick={handleClose}></i>
                </div>
                <div className="modalService-text">
                    <h5>{title}</h5>
                    <div>{description}</div>
                    <LinkScroll to="contact" className="callToActionBtn-container" onClick={handleClose}>
                        ¿Te quedan dudas? Escribinos!
                    </LinkScroll>
                    <div className="modalService-text_image">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalService;