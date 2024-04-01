import React, { useState, useEffect } from 'react';

export const Users = () => {
    const [countUsers, setCountUsers] = useState(0);

    useEffect(() => {
        //fetch para traer la data de la API
        const getData = async URI => {
            try {
                const response = await fetch(URI);
                const data = await response.json();
                setCountUsers(data.count);
            } catch (error) {
                console.log(error.message);
            }
        };
        getData('http://localhost:4050/api/users');

    }, []);

    return (
        <div>
            <h2>Usuarios</h2>
            <p>{countUsers} usuarios</p>
        </div>
    )
}
