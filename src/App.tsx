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
  return (
    <div className="app">
      <header>
        <button onClick={ switchRegister }>Cadastrar</button>
        <button onClick={ switchList }>Ver produtos</button>
      </header>
      {state ? <RegisterProduct /> : <ListProducts products={ [] } />}

      <br />
    </div>
  );
}

export default App;
