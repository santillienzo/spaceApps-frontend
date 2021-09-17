import React, { useEffect } from 'react';
import SectionTitle from '../../theme/SectionTitle/SectionTitle';
import './About.css'

//Assets
import img1 from '../../../assets/Logo/Banner.jpg'
import img2 from '../../../assets/Images/coffee.jpg'
import img3 from '../../../assets/Icons/objetivo.png'

const SectionAbout = ({title, paragraph, img})=>{

    return(
        <div className="sectionAbout-container">
            <h4>{title}</h4>
            <div className="sectionAbout-paragraph">{paragraph}</div>
            <div className="sectionAbout-img">
                <img src={img} alt="sss" />
            </div>
        </div>
    )
}

const About = () => {

    const content = [
        {
            title:"¿Quiénes somos?" ,
            paragraph: [<p key="p1">Somos <span>Space Apps</span>, una startup dedicada a desarrollar páginas y aplicaciones web dando siempre la mejor atención y confort para nuestros clientes.</p>], 
            image:img1
        },
        {
            title:"¿Por qué hacemos esto?",
            paragraph:[
                <p key="p1">Somos apasionados por la técnología y el diseño, por lo que se nos ocurrió la fantástica idea de plasmar nuestras ideas ayudando a los negocios o a clientes a posicionarse en internet mediante una página web.</p>,
                <p key="p2">Hoy en día es vital para una entidad tener su propio sitio web, por eso ofrecemos los mejores planes y consejos para que su negocio crezca.</p>
            ] ,
            image:img2
        },
        {
            title:"Objetivo",
            paragraph:[<p key="p1">Nuestros objetivos son dedicar nuestro esfuerzo y compromiso en aprender cada día más, para así, poder brindar los mejores servicios y productos a nuestros clientes.</p>,
                        <p key="p2">Queremos seguir expandiendonos por el mundo de la programación y el desarrollo de páginas webs, aplicaciones móviles, sistemas y más!</p>,
                        <p key="p3">Buscamos innovar y mejorar cada día un poquito más, porque, como ya se sabe, cada grano de arena cuenta...</p>],
            image:img3
        }

    ]

    return (
        <div className="about-container" id="about">
            <SectionTitle title="Nosotros"/>
            <div className="about-sections">
            {
                content.map( (e,i) =>(
                    <SectionAbout 
                        title= {e.title}
                        paragraph={e.paragraph}
                        img={e.image}
                        key={i}
                    />
                ))
            }
            </div>
        </div>
    );
};

export default About;