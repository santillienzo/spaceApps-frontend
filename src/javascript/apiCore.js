const axios = require("axios")

// const uri= `https://space-apps-back.herokuapp.com/`;
const uri= `http://localhost:5000/`;

const config = {
    headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
};

// Enviar emails
export const sendEmail = async email => {
    return await axios.post(`${uri}email/send-email`, email, config.headers)
    .then(res => {
        return res.json();
    }).catch(err => {
        console.log(err)
    })
}

// Crear Emails
export const createEmails = async data => {
    console.log(data)
    return await axios.post(`${uri}email/create-email-bd`, data, config.headers)
    .then(res => {
        return console.log(res.data);
    }).catch(err => {
        console.log(err)
    })
}

// Leer emails
export const readEmails = ()=>{

}

// Eliminar Emails
export const removeEmails = ()=>{

}

