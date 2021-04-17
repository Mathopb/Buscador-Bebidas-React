import React from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import ListaRecetas from './Components/ListaRecetas';

import CategoriasProvider from './Context/CategoriasContext';
import RecetasProvider from './Context/RecetasContext';
import ModalProvider from './Context/ModalContext';


function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />

          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>

            <ListaRecetas />
          </div>
          
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
