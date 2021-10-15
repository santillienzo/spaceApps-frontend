import React, { useState } from 'react';
import './Login.css'
import logo from '../../../assets/Logo/Logo_orange.png'
import { authenticate, isAuthenticated, signin } from '../../../javascript/adminUserService';
import { Redirect } from 'react-router';


const Login = () => {

    const [values, setValues] = useState({
        username: "",
        password: "",
        error: "",
        loading: false,
    });

    const {username, password, loading, error} = values; 
    const {adminUser} = isAuthenticated();

    const handleChange = name => event =>{
        setValues({...values, error:false, [name]: event.target.value})
    }

    const clickSubmit = (event)=>{
        event.preventDefault();
        setValues({...values, error:false, loading: true})
        signin({username, password})
        .then(data => {
            if (data.error) {
                setValues({...values, error: data.error, loading: false})
            }else{
                authenticate(
                    data, () => {
                        setValues({
                            ...values,
                            redirectToReferrer: true
                        })
                    }
                )
            }
        })
    }

    const showError = () => (
        <div className="login-showError" style={{display: error ? '': 'none'}}>
            {error}
        </div>
    )

    const showLoading = () => (
        loading && (
            <div className="login-showLoading">
            <h2>Loading...</h2>
            </div>
        )
    )

    const redirectUser = () => {
        if (isAuthenticated()) {
            window.location.href = "/admin/dashboard"
        }
    }
    
    return (
        <div className="login-container">
            <img src={logo} alt="" />
            <div className="login-container-form">
                <h4>Bienvenid@ a <span>Space Apps</span></h4>
                <h5>Ingresa tus credenciales</h5>
                <form onSubmit={(e)=> clickSubmit(e)}>
                    <div className="login-input-container">
                        <label htmlFor="login-username"><i className="fas fa-user"></i></label>
                        <input type="text" placeholder="Nombre de usuario" id="login-username" onChange={handleChange('username')}/>
                    </div>
                    <div className="login-input-container">
                        <label htmlFor="login-password"><i className="fas fa-lock"></i></label>
                        <input type="password" placeholder="Contraseña" id="login-password" onChange={handleChange('password')}/>
                    </div>
                    <button>Enviar</button>
                </form>
            </div>
            {redirectUser()}
            {showLoading()}
            {showError()}
        </div>
    );
};

export default Login;