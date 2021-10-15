// const axios = require("axios")

// const uri= `https://space-apps-back.herokuapp.com/`;
const uri= `http://localhost:5000/`;

const config = {
    headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
};

export const signin = (adminUser)=>{
    return fetch(`${uri}admin/signin`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(adminUser) // user: 
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    })
}

export const authenticate = (data, next)=>{
    if(typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data));
        next();
    }
}

export const isAuthenticated = ()=>{
    if(typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
        // return localStorage.getItem('jwt')
    }
    return false;
}   


export const signout = (next) =>{
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt');
        next();
        return fetch(`${uri}admin/signout`,{
            method: 'GET'
        })
        .then(response => {
            console.log('signout', response)
        })
        .catch(err => console.log(err))
    }
}