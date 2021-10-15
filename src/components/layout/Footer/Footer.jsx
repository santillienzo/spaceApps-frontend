import React, {useState} from 'react';
import { Redirect } from 'react-router';
import './Footer.css'

const Footer = () => {

    const [counter, setCounter] = useState(0);

    const redirect = ()=>{
        if(counter === 5){
            return <Redirect to="/admin/login"/>
        }
    }
    

    return (
        <footer className="footer-container">
            <p>Todos los derechos reservados. <span onClick={()=> setCounter(counter +1)}>Space Apps©</span></p>
            {redirect()}
        </footer>
    );
};

export default Footer;