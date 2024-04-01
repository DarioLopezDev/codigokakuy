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
        <div>
            <h2>Último Usuario</h2>
            <div>
                <p>{lastUser.user_id}</p>
                <p>{lastUser.fullname}</p>
                <p>{lastUser.username}</p>
                <p>{lastUser.email}</p>
                <p>{lastUser.birthday}</p>
                <p>{lastUser.adress}</p>
                <img src={'http://localhost:4050' + lastUser.image} 
                     alt={lastUser.fullname} 
                     width="170px" />
            </div>
        </div>
    )
}
