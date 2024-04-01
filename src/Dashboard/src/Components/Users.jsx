import React, { useState, useEffect } from 'react';

export const Users = () => {
    const [countUsers, setCountUsers] = useState(0);

    useEffect(() => {
        //fetch para traer la data de la API
        async function getData() {
            try {
                const response = await fetch('http://localhost:4050/api/users');
                const data = await response.json();
                setCountUsers(data.count);

            } catch (error) {
                console.log(error.message);

            }
        };
        getData();

    }, []);

    return (
        <section>
            <h2>Total de Usuarios</h2>
            <p>{countUsers} usuarios</p>
        </section>
    )
};