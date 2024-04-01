import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Users } from './Components/Users';
import { Books } from './Components/Books';
import { Categories } from './Components/Categories';
import { LastItem } from './Components/LastItem';
import { CategoriesProduct } from './Components/CategoriesProduct';
import { ListOfBooks } from './Components/ListOfBooks';

function App() {

  const [count, setCount] = useState(1)

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Dashboard</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <main>
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