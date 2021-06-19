
import React from 'react';

                                        //importando os componentes filhos.
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

import './index.css';

function App() {
  
  return (
    <div className="App"> 
      <Header/>          {/*importamos nossos componentes, basta inseri-los dentro do código JSX.*/}
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
