import './styles/App.css';
import { useState } from 'react';
import ListProducts from './components/ListProducts';
import RegisterProduct from './components/RegisterProduct';

function App() {
  const [state, setState] = useState(true);

  function switchRegister() {
    setState(true);
  }
  function switchList() {
    setState(false);
  }
  const handleSubmit = (productInfo: any): void => {
    const product = {
      id: Date.now(),
      ...productInfo,
    };
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
        && <ListProducts products={ [] } />}
      <br />
    </div>
  );
}

export default App;
