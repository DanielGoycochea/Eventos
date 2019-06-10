import React from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import ListaEventos from './Components/ListaEventos'

import CategoriasProvider from './context/CategoriasContext'
import EventosProvider from './context/EventosContext'


function App() {
  return (
    <EventosProvider>
      <CategoriasProvider>
        <Header />
        <div className="uk-container">
          <Formulario/>
          <ListaEventos/>
        </div>
      </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;
