// Version spéciale de <Link> qui ajoutera des attributs de style à l'élément rendu lorsqu'il correspond à l'URL actuelle

// On utilisera NavLink pour voyager de la Page Accueil à la page A propos

import { NavLink } from 'react-router-dom';

// Importation du logo

import Logo from '../assets/logo.svg';

const BarreNav = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={Logo} alt="Logo" className="navbar__img" />
      </NavLink>
      {/* Menu Accueil Actif-Inactif & définition des styles */}
      <div className="navbar__links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'navbar__links--active' : 'navbar__links--inactive'
          }
        >
          Accueil
        </NavLink>
        {/* Menu A propos Actif-Inactif & définition des styles*/}
        <NavLink
          to="/apropos"
          className={({ isActive }) =>
            isActive ? 'navbar__links--active' : 'navbar__links--inactive'
          }
        >
          A propos
        </NavLink>
      </div>
    </nav>
  );
};
export default BarreNav;
