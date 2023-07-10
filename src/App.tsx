import './styles/App.css';
import { useState } from 'react';
import ListProducts from './components/ListProducts';
import RegisterProduct from './components/RegisterProduct';
import { ProductType, ProductWithId } from './types';

function App() {
  const [state, setState] = useState(true);
  const [productList, setproductList] = useState<ProductWithId[]>([]);
  function switchRegister() {
    setState(true);
  }
  function switchList() {
    setState(false);
  }
  const handleSubmit = (productInfo: ProductType): void => {
    const product = {
      id: Date.now(),
      ...productInfo,
    };
    setproductList([
      ...productList,
      product,
    ]);
    console.log(productList);
  };

  const handleDelete = (id: number | string) => {
    const newList = productList.filter((product) => product.id !== id);
    setproductList(newList);
  };

  return (
    <div className="app">
      <header>
        <button onClick={ switchRegister }>Cadastrar</button>
        <button onClick={ switchList }>Ver produtos</button>
      </header>
      {state
        && <RegisterProduct handleSubmit={ handleSubmit } />}
      {!state
        && <ListProducts products={ productList } handleDelete={ handleDelete } />}
      <br />
    </div>
  );
}

export default App;
