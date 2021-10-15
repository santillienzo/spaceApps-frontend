import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { readEmails, removeEmails } from '../../../../javascript/userDataService';
import './TableUserData.css'

const TableUserData = ()=>{

    const [dataUsers, setDataUsers] = useState({});
    const [error, setError] = useState("");

    const loadDataUsers = ()=>{
        readEmails().then(data =>{
            if (data.error) {
                setError(error);
                console.log(error);
            }else{
                setDataUsers(data)
            }
        })
    }

    const removeUserData = (id) =>{
        removeEmails(id);
        setDataUsers(dataUsers.filter(e => e._id === id));
    }

    useEffect(()=>{
        loadDataUsers();

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataUsers])

    return(
        <div className="admin-user_data-container">
            <div className="admin-user_data-title">
                <h5>Base de datos de correos</h5>
            </div>
            <div className="admin-user_data-table-column">
                <div>N°</div>
                <div>Nombre</div>
                <div>Email</div>
                <div>Teléfono</div>
                <div>Fecha</div>
                <div>C</div>
                <div>X</div>
            </div>
            <div className="admin-user_data-table-row">
                <ul>
                {
                    dataUsers.length > 0 ? (
                        dataUsers.map((element,i)=>(
                            <li key={element._id}>
                                <div>{i + 1}</div>
                                <div>{element.name}</div>
                                <div>{element.email}</div>
                                <div>{element.phone}</div>
                                <div>{element.createdAt.substring(0,10)}</div>
                                <div>2</div>
                                <div onClick={() => removeUserData(element._id)}><i className="fas fa-trash"></i></div>
                            </li>
                        ))
                    ):
                    (
                        <div className="admin-user_data-table-row_empty">No hay elementos que mostrar <i className="far fa-tired"></i></div>
                    )
                }
                </ul>
            </div>
        </div>
    )
}

export default TableUserData;