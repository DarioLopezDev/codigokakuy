import React, { useState, useEffect } from 'react';

export const CategoriesProduct = () => {
    const [countCategPro, setCountCategPro] = useState(0);

    useEffect(() => {
        //fetch para traer la data de la API
        /*const getData = async URI => {
            try {
                const response = await fetch(URI);
                const data = await response.json();
                setCountCategPro(data.count);

            } catch (error) {
                console.log(error.message);

            }
        };
        getData('http://localhost:4050/api/products');*/

    }, []);

    return (
        <div>
            <h2>Categorías y sus Productos</h2>
            <p>{countCategPro} categorías</p>
        </div>
    )
};