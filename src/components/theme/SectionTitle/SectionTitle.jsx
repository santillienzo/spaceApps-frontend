import React from 'react';
import './SectionTitle.css'

const SectionTitle = ({title}) => {
    return (
    <div className="sectionTitle ">
        <h3>{title}</h3>
    </div>
    );
};

export default SectionTitle;