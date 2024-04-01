import React, {useState, useEffect} from 'react';

export const Books = () => {
    const [countBooks, setCountBooks] = useState(0);

    useEffect(() => {
        //fetch para traer la data de la API
        const getData = async URI => {
            try {
                const response = await fetch(URI);
                const data = await response.json();
                setCountBooks(data.count);
                                
            } catch (error) {
                console.log(error.message);
                                
            }
        };
        getData('http://localhost:4050/api/products');

    }, []);
    
  return (
    <section>
        <h2>Total de Libros</h2>
        <p>{countBooks} libros</p>
    </section>
  )
};