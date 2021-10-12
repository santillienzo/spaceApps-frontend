const axios = require("axios")

const uri= `https://space-apps-back.herokuapp.com/send-email`;
const config = {
    headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
};

export const sendEmail = async email => {
    return await axios.post(uri, email, config.headers)
    .then(res => {
        return res.json();
    }).catch(err => {
        console.log(err)
    })
}