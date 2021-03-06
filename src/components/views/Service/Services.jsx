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

const Service = ({title,description,img, itemClass, alt})=>{
    const[openModal, setOpenModal] = useState(false);

    return(
        <>
        <div className={"service-container wow animate__animated animate__backInRight " + itemClass}>
            <div className="service-cover">
                <div className="service-img">
                    <img src={img} alt={alt} />
                </div>
                <h5>{title}</h5>
                <BtnReadMore open={setOpenModal}/>
            </div>
        </div>
        {
            openModal ?
            (
                <ModalService close={()=> setOpenModal(false)} description={description} title={title} image={img} alt={alt}/>
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
            alt: "Ilustration social media",
        },
        {
            title: "Community manager",
            description:[<p key="p1">Las principales funciones de un Community Manager (cm) son las siguientes: </p>,
                        <ul key="p2">
                            <li>Analizar la competencia:  una de las utilidades del community manager es advertir qu?? contenido debe ser evitado para no ser vistos como imitadores de otras marcas.</li>
                            <li>Generar contenido: El CM es el encargado de publicar y (a veces) redactar los contenidos del blog, para lo que necesita tener claro cu??l es el momento indicado y c??mo redactar el t??tulo m??s atractivo, sin caer en sensacionalimos o amarillismo.</li>
                            <li>Monitorear constantemente: Durante el d??a estaremos monitoreando, respondiendo consultas o buscando conversar con los usuarios sea porque nos mencionan directamente o porque usan alguna palabra clave que est?? directamente relacionada con nuestro servicio.</li>
                        </ul>],
            img: cm,
            itemClass: "",
            alt: "Ilustration community manager",
        },
        {
            title: "Estrategia y gesti??n de publicidad",
            description:[<p key="p1">Organizamos los distintos p??blicos, creamos las campa??as y los anuncios para que tu empresa tenga la mayor efectividad en cuanto a la estrategia de publicidad paga implementada</p>,
                        <p key="p2">Nos encargamos de:</p>,
                        <ul>
                            <li>Gestionar los p??blicos para cada estrategia</li>
                            <li>Creamos las campa??as de acuerdo a los objetivos seleccionados</li>
                            <li>Aplicamos anuncios visualmente atractivos para los posibles clientes</li>
                        </ul>
                    ],
            img: campaign,
            itemClass: "bigImage-service",
            alt: "Ilustration megaphone in mail",
        },
        {
            title: "Dise??o web",
            description:[<p key="p1">Hoy en d??a es vital para una empresa tener su propio sitio web, ya que brinda credibilidad ante los clientes potenciales y ayuda a ser visible en los buscadores.</p>,
                        <p key="p2">Nosotros te ofrecemos la posibilidad de que puedas tener tu propia web! Aplicamos dise??os ??nicos para que tu p??gina se destaque entre tus competidores ayudandote a crecer en ventas e impactar positivamente con tus clientes.</p>,
                        <p key="p3">Para que tu experiencia sea la mejor te ofrecemos lo siguiente: </p>,
                        <ul key="p4">
                            <li>Dise??o y desarrollo web</li>
                            <li>Mantenimiento</li>
                            <li>Hosting</li>
                            <li>Dominio</li>
                        </ul>],
            img: webDesign,
            itemClass: "",
            alt: " Illustration web design pc and movil",
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
                            alt={e.alt}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Services;