import './App.css';
import Boton from './components/Boton.jsx';
import Contador from './components/Contador.jsx';
import { useState } from 'react';

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const aumentarContador = () => {
    setNumClicks(numClicks + 1);
  };
  const decrementarContador = () => {
    setNumClicks(numClicks - 1);
  };
  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} />
        <div className='row'>
          <div className='col-md-4'>
            <Boton
              texto='Incrementar'
              variant='success'
              manejarClick={aumentarContador}
            />
          </div>
          <div className='col-md-4'>
            <Boton
              texto='Decrementar'
              variant='danger'
              manejarClick={decrementarContador}
            />
          </div>
          <div className='col-md-4'>
            <Boton
              texto='Reiniciar'
              variant='warning'
              manejarClick={reiniciarContador}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
