import React, { useState, useEffect } from 'react';

/*const getID = async () => {
    try {
        const fetchPetition = await fetch('http://localhost:4050/api/users');
        const fetchedUsers = await fetchPetition.json();
        const usersList = fetchedUsers.users;
        const lastId = usersList[usersList.length - 1].user_id;
        return lastId;
    } catch (error) {
        console.log(error.message);
    }
}
getID(); 
*/

export const LastItem = () => {
    const [lastUser, setLastUser] = useState([]);
    //useEffect() con .then()
    /*useEffect(() => {
        fetch('http://localhost:4050/api/users/13')
        .then(res => res.json())
        .then(data => {
            console.log(data.usuario);
            setLastUser(data.usuario);
        });
    }, []);*/


    //useEffect() con async await
    useEffect(() => {
        //fetch para traer la data de la API
        const getData = async URI => {
            try {
                const response = await fetch(URI);
                const data = await response.json();
                const usersList = data.users;
                const lastId = usersList[usersList.length - 1].user_id;
                const response2 = await fetch(`http://localhost:4050/api/users/${lastId}`);
                const data2 = await response2.json();

                setLastUser(data2.usuario);

            } catch (error) {
                console.log(error.message);

            }
        };
        getData(`http://localhost:4050/api/users`);

    }, []);

    return (
        <section>
            <h2>Detalle del Último Usuario</h2>
            <main>
                <p>ID: {lastUser.user_id}</p>
                <p>Nombre: {lastUser.fullname}</p>
                <p>Usuario: {lastUser.username}</p>
                <p>Email: {lastUser.email}</p>
                <p>Cumpleaños: {lastUser.birthday}</p>
                <p>Dirección: {lastUser.adress}</p>
                <img src={'http://localhost:4050' + lastUser.image} 
                     alt={lastUser.fullname} 
                     width="170px" />
            </main>
        </section>
    )
};