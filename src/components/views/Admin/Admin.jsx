import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import './Admin.css'
import TableUserData from './TableUserData/TableUserData';

const Admin = () => {
    if (window.screen.width <= 780) {
        
        return (
            <div>
                <Route path="/admin" exact>
                    <TableUserData/>
                </Route>
            </div>
        )
    }else{
        return(
            <div className="admin-dashboard-container">
                <div className="admin-dashboard-navDesk">
                    <div className="admin-dashboard-navDesk-items">
                        <i className="fas fa-user-friends"></i>
                        <Link to="/admin" className="link">Correos</Link>
                    </div>
                </div>
                <div className="admin-dashboard-data-container">
                    <Route path="/admin" exact>
                        <TableUserData/>
                    </Route>
                </div>
            </div>
        )
    }
};

export default Admin;