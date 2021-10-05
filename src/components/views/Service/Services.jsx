import React from 'react';
import './Services.css'

//Assets
import webDesign from '../../../assets/SVG/service/webDesign.svg'
import socialMedia from '../../../assets/SVG/service/socialMedia.svg'
import cm from '../../../assets/SVG/service/cm.svg'
import campaign from '../../../assets/SVG/service/campaign.svg'


import SectionTitle from '../../theme/SectionTitle/SectionTitle';
import BtnReadMore from '../../theme/BtnReadMore/BtnReadMore';

const Service = ({title,description,img, itemClass})=>{
    return(
        <div className={"service-container wow animate__animated animate__backInRight " + itemClass}>
            <div className="service-cover">
                <div className="service-img">
                    <img src={img} alt="" />
                </div>
                <h5>{title}</h5>
                <BtnReadMore/>
            </div>
            <div className="service-description">
                {
                    description
                }
            </div>
        </div>
    )
}

const Services = () => {

    const content= [
        {
            title: "Social Media Plan",
            description:<p key="p1">Te brindamos el mejor soporte, mantenimiento y estrategias SEO para que tu web esté siempre en lo más alto.</p>,
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
            description:<p key="p1">Diseñamos tu página web a medida, utilizando las mejores estrategias de seguridad y diseño multiplataforma para que tu web sea lo más completa posible.</p>,
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