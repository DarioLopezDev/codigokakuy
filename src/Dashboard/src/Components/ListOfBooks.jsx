import React, { useState, useEffect } from 'react';

export const ListOfBooks = () => {
    const [listOfBooks, setlistOfBooks] = useState([]);

    useEffect(() => {
        //fetch para traer la data de la API
        const getData = async URI => {
            try {
                const response = await fetch(URI);
                const data = await response.json();
                setlistOfBooks(data.products);

            } catch (error) {
                console.log(error.message);

            }
        };
        getData('http://localhost:4050/api/products');

    }, []);

    return (
        <section>
            <h2>Listado de Libros</h2>
            <main>
                {listOfBooks.map(book => {
                        return (
                            <div key={book.book_id}>
                                <h3>Título: {book.title}</h3>
                                <p>Descripción: {book.description}</p>
                            </div>
                        );
                    })
                }
            </main>
        </section>
    )
};