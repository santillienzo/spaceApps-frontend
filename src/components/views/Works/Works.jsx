import React from 'react';
import './Works.css'

import logo from '../../../assets/Works/glow/logo.png'
import fondo from '../../../assets/Works/glow/fondo.png'

import SectionTitle from '../../theme/SectionTitle/SectionTitle';

const WorkCard = ({href, img_back, img_front})=>{
    return(
        <div className="proyecto">
            <a href={href} target="_BLANK">
            <div className="flipcard">
                <div className="front">
                    <img src={img_front} alt=""/>
                </div>
                <div className="back">
                    <img src={img_back} alt=""/>
                </div>
            </div>
            </a>
        </div>
    )
}

const Works = () => {
    const content = [
        {
            href:"",
            img_front:logo,
            img_back:fondo,
        }
    ]


    return (
        <div id="works">
            <SectionTitle title="Clientes"/>
            <div className="works-container">
                {
                    content.map((e,i)=>(
                        <WorkCard 
                            key={i}
                            href={e.href}
                            img_front={e.img_front}
                            img_back={e.img_back}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Works;