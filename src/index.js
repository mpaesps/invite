import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/index.js'; // Certifique-se de que o caminho está correto
import { BrowserRouter } from 'react-router-dom'; // Importando o BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Envolva o componente Home com o BrowserRouter */}
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);

// Se quiser medir o desempenho da sua aplicação, passe uma função para registrar os resultados
// ou envie para um endpoint de análise.
reportWebVitals();
