import React from 'react';
import './Services.css'

//Assets
import img1 from '../../../assets/Icons/webDesignPng.png'
import img2 from '../../../assets/Icons/mantenimiento.png'
import img3 from '../../../assets/Icons/hosting.png'
import img4 from '../../../assets/Icons/www.png'


import SectionTitle from '../../theme/SectionTitle/SectionTitle';

const Service = ({title,description,img})=>{
    return(
        <div className="service-container">
            <div className="service-cover">
                <div className="service-img">
                    <img src={img} alt="" />
                </div>
                <h5>{title}</h5>
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
            title: "Diseño web",
            description:<p key="p1">Diseñamos tu página web a medida, utilizando las mejores estrategias de seguridad y diseño multiplataforma para que tu web sea lo más completa posible.</p>,
            img: img1,
        },
        {
            title: "Mantenimiento",
            description:<p key="p1">Te brindamos el mejor soporte, mantenimiento y estrategias SEO para que tu web esté siempre en lo más alto.</p>,
            img: img2,
        },
        {
            title: "Host",
            description:<p key="p1">Te alojamos tu página web en los mejores y más confiables servidores.</p>,
            img: img3,
        },
        {
            title: "Dominio",
            description:[<p key="p1">Te ofrecemos de manera GRATIS un dominio personalizado.</p>,
                <p key="p2">Por ejemplo: www.tudominio.com</p>],
            img: img4,
        },
    ];


    return (
        <div id="service">
            <SectionTitle title="Servicios"/>
            <div className="services-container">
                {
                    content.map((e,i)=>(
                        <Service 
                            key={i}
                            title={e.title}
                            description={e.description}
                            img={e.img}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Services;