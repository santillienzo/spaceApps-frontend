import React, {useState} from 'react';
import './Services.css'
import './ModalService.css'

//Assets
import webDesign from '../../../assets/SVG/service/webDesign.svg'
import socialMedia from '../../../assets/SVG/service/socialMedia.svg'
import cm from '../../../assets/SVG/service/cm.svg'
import campaign from '../../../assets/SVG/service/campaign.svg'


import SectionTitle from '../../theme/SectionTitle/SectionTitle';
import BtnReadMore from '../../theme/BtnReadMore/BtnReadMore';

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
                    <p>{description}</p>
                    <div className="modalService-text_image">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Service = ({title,description,img, itemClass})=>{
    const[openModal, setOpenModal] = useState(false);

    return(
        <>
        <div className={"service-container wow animate__animated animate__backInRight " + itemClass}>
            <div className="service-cover">
                <div className="service-img">
                    <img src={img} alt="" />
                </div>
                <h5>{title}</h5>
                <BtnReadMore open={setOpenModal}/>
            </div>
        </div>
        {
            openModal ?
            (
                <ModalService close={()=> setOpenModal(false)} description={description} title={title} image={img}/>
            ):("")
        }
        </>
    )
}

const Services = () => {

    const content= [
        {
            title: "Social Media Plan",
            description:<p key="p1">Ofrecemos estrategias integrales para el desarrollo y cumplimiento de tus objetivos de Marketing en Facebook, Instagram, Youtube, y más plataformas sociales a través de estrategias integradas a la web que apuntan a maximizar el valor de las RR.SS para tu negocio.</p>,
            img: socialMedia,
            itemClass: "",
        },
        {
            title: "Community manager",
            description:<p key="p1">Te alojamos tu página web en los mejores y más confiables servidores.</p>,
            img: cm,
            itemClass: "",
        },
        {
            title: "Estrategia y gestión de publicidad",
            description:[<p key="p1">Te ofrecemos de manera GRATIS un dominio personalizado.</p>,
            <p key="p2">Por ejemplo: www.tudominio.com</p>],
            img: campaign,
            itemClass: "bigImage-service",
        },
        {
            title: "Diseño web",
            description:<p key="p1">Diseñamos tu página web a medida, </p>,
            img: webDesign,
            itemClass: "",
        },
    ];


    return (
        <div id="service">
            <SectionTitle title="Servicios"/>
            <div className="services-container ">
                {
                    content.map((e,i)=>(
                        <Service 
                            key={i}
                            title={e.title}
                            description={e.description}
                            img={e.img}
                            itemClass={e.itemClass}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Services;