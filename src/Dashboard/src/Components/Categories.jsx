import React, { useState, useEffect } from 'react';

export const Categories = () => {
    const [countCateg, setCountCateg] = useState(0);

    useEffect(() => {
        //fetch para traer la data de la API
        const getData = async URI => {
            try {
                const response = await fetch(URI);
                const data = await response.json();
                setCountCateg(data.countByCategory.count);

            } catch (error) {
                console.log(error.message);

            }
        };
        getData('http://localhost:4050/api/products');

    }, []);

    return (
        <section>
            <h2>Total de Categorías</h2>
            <img src="../category.png" alt="categorías" width={100} />
            <p>{countCateg} categorías</p>
        </section>
    )
};