import React, {useState} from 'react';
import './Services.css'

//Assets
import webDesign from '../../../assets/SVG/service/webDesign.svg'
import socialMedia from '../../../assets/SVG/service/socialMedia.svg'
import cm from '../../../assets/SVG/service/cm.svg'
import campaign from '../../../assets/SVG/service/campaign.svg'


import SectionTitle from '../../theme/SectionTitle/SectionTitle';
import BtnReadMore from '../../theme/BtnReadMore/BtnReadMore';
import ModalService from './ModalService/ModalService';

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
            description:<p key="p1">Ofrecemos un estudio de tu empresa. A partir de los datos obtenidos estableceremos objetivos, analizaremos los resultados, y podremos compararlos con los de la competencia. De esta forma definiremos las estrategias para mejorar el rendimiento de las redes sociales.</p>,
            img: socialMedia,
            itemClass: "",
        },
        {
            title: "Community manager",
            description:[<p key="p1">Las principales funciones de un Community Manager (cm) son las siguientes: </p>,
                        <ul key="p2">
                            <li>Analizar la competencia:  una de las utilidades del community manager es advertir qué contenido debe ser evitado para no ser vistos como imitadores de otras marcas.</li>
                            <li>Generar contenido: El CM es el encargado de publicar y (a veces) redactar los contenidos del blog, para lo que necesita tener claro cuál es el momento indicado y cómo redactar el título más atractivo, sin caer en sensacionalimos o amarillismo.</li>
                            <li>Monitorear constantemente: Durante el día estaremos monitoreando, respondiendo consultas o buscando conversar con los usuarios sea porque nos mencionan directamente o porque usan alguna palabra clave que está directamente relacionada con nuestro servicio.</li>
                        </ul>],
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
            description:[<p key="p1">Hoy en día es vital para una empresa tener su propio sitio web, ya que brinda credibilidad ante los clientes potenciales y ayuda a ser visible en los buscadores.</p>,
                        <p key="p2">Nosotros te ofrecemos la posibilidad de que puedas tener tu propia web! Aplicamos diseños únicos para que tu página se destaque entre tus competidores ayudandote a crecer en ventas e impactar positivamente con tus clientes.</p>,
                        <p key="p3">Para que tu experiencia sea la mejor te ofrecemos lo siguiente: </p>,
                        <ul key="p4">
                            <li>Diseño y desarrollo web</li>
                            <li>Mantenimiento</li>
                            <li>Hosting</li>
                            <li>Dominio</li>
                        </ul>],
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