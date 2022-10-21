import { useState } from 'react';
import data from '../data';
import '../styles/App.css';

function App() {

  const [products, setProducts] = useState(data);

  function removeItem(id) {
    // alert(id);
    const filteredList = products.filter(product => product.id !== id);
    setProducts(filteredList);
  }

  return (
    <div className="App">
      <button onClick={() => setProducts(data)}></button>
      <ul>
        {products.map(product => (
          <li onClick={() => removeItem(product.id)}>
            <p>{product.name}</p>
            <img width="200" src={product.image} alt="product image" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
