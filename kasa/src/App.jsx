// React-router-dom version 6.4

// React Framework

import React from 'react';

// Navigation définition des routes
// Depuis la version 6 il n'est plus nécessaire d'utiliser la commande <switch> On peut englober <route> dans <routes>

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

// Style => Sass

import './main.css';

// Importation dans le router : Dossier pages / BrowserRouter Accueil (Accueil.jsx), A propos (Apropos.jxs), Fiche logement (Fichelog.jsx), Page d'erreur 404 (Error.jsx)

import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos.jsx';
import Fichelog from './pages/Fichelog';
import Error from './pages/Error';

// Dossier components Header (Barrenav.jsx) et Footer (Footer.jsx)

import BarreNav from './components/BarreNav';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <BarreNav />
          <Routes>
            {/* Definition des chemins :  Affichage éléments Accueil (page d'accueil) A propos etc.*/}
            <Route index element={<Accueil />} />
            <Route path="Apropos" element={<Apropos />} />
            {/* Définition du chemin dynamique pour product */}
            <Route path="products/:productId" element={<Fichelog />} />
            <Route path="/kaza" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Error />} />
            
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
