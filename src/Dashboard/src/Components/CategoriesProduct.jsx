import React, { useState, useEffect } from 'react';

export const CategoriesProduct = () => {
    const [categPro, setCategPro] = useState([]);

    useEffect(() => {
        //fetch para traer la data de la API
        const getData = async URI => {
            try {
                const response = await fetch(URI);
                const data = await response.json();
                const genresList = data.countByCategory.Géneros;
                setCategPro(genresList);

            } catch (error) {
                console.log(error.message);

            }
        };
        getData('http://localhost:4050/api/products');

    }, []);

    return (
        <section>
            <h2>Categorías y sus Productos</h2>
            {categPro.map(genre => {
                return (
                    <div key={genre.genre_id}>
                        <p>Género: {genre.name}</p>
                        <p>Libros: {genre.Libros}</p>
                    </div>
                )
            })}
            <p>categorías</p>
        </section>
    )
};