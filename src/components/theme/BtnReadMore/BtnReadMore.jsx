import React from 'react';
import './BtnReadMore.css';

const BtnReadMore = ({open}) => {
    return (
        <div className="btn-readMore" onClick={()=>open(true)}>
            <div className="button">Leer más</div>
        </div>
    );
};

export default BtnReadMore;