import React from 'react';
import kakuyLogo from '/logo3.png';
import './App.css';
import { Users } from './Components/Users';
import { Books } from './Components/Books';
import { Categories } from './Components/Categories';
import { LastItem } from './Components/LastItem';
import { CategoriesProduct } from './Components/CategoriesProduct';
import { ListOfBooks } from './Components/ListOfBooks';

function App() {

  return (
    <>
      <div>
        <a href="">
          <img 
          src={kakuyLogo} 
          className="logo react" 
          alt="Kakuy logo" 
          />
        </a>

      </div>
      <h1>Dashboard</h1>
      <main id='main-app'>
        <Users />
        <Books />
        <Categories />
        <LastItem />
        <CategoriesProduct />
        <ListOfBooks />
      </main>
      
    </>
  )
}
export default App;