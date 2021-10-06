import React from 'react';
import SectionTitle from '../../theme/SectionTitle/SectionTitle';
import './About.css'

//Assets
import img1 from '../../../assets/SVG/about/about1.svg'

const SectionAbout = ({paragraph, img, imageClass})=>{

    return(
        <div className="sectionAbout-container " >
            <div>
                <div className="sectionAbout-paragraph">{paragraph}</div>
            </div>
            <div className="sectionAbout-img">
                <img src={img} alt="sss" className={`${imageClass}`}/>
            </div>
        </div>
    )
}

const About = () => {

    const content = [
        {
            title:"¿Quiénes somos?" ,
            paragraph: [
                    <p key="p1">Somos <span className="name">Space Apps</span>, una startup dedicada al marketing y al desarrollo web.</p>,
                    <p key="p2">Estamos apasionados por el <span>desarrollo</span> y el <span>crecimiento</span>, por eso se nos ocurrió la fantástica idea de ayudar a las empresas y emprendimientos a aumentar su presencia en internet mediante las mejores <span>estrategias de publicidad y marketing digital.</span></p>
                ], 
            image:img1,
            imageClass:"about-svg_img",
        },
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
                        imageClass={e.imageClass}
                    />
                ))
            }
            </div>
        </div>
    );
};

export default About;