//HOOKS
import { Link, useLocation } from 'react-router-dom';
//COMPONENTS
import login from '../../../public/Nav/usuario.png';
//STYLE
import style from './NavBar.module.css';
import { useState } from 'react';

const ROUTES = {
  HOME: '/',
  MEMBRESIA: '/membresia',
  ACTIVIDADES: '/actividades',
  CONTACTANOS: '/contacto',
};

const NAV_ITEMS = [
  { to: ROUTES.MEMBRESIA, label: 'Membresías' },
  { to: ROUTES.ACTIVIDADES, label: 'Actividades' },
  { to: ROUTES.CONTACTANOS, label: 'Contáctanos' },
];

const NavItem = ({ to, label, isActive }) => (
  <li className={`${style.item} ${isActive ? style.active : ''}`}>
    <Link to={to} aria-current={isActive ? 'page' : undefined}>
      {label}
    </Link>
  </li>
);

const NavBar = ({ openModal }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className={style.navbar}>
      <Link to={ROUTES.HOME} className={style.title}>
        GYMFit!
      </Link>
      <button
        className={style.menuButton}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        ☰
      </button>
      <nav className={`${style.container} ${isMenuOpen ? style.menuOpen : ''}`}>
        <ul className={style.items}>
          {NAV_ITEMS.map(({ to, label }) => (
            <NavItem
              key={to}
              to={to}
              label={label}
              isActive={location.pathname === to}
            />
          ))}
          <li
            className={style.login}
            onClick={openModal}
            role="button"
            aria-label="Login / Registrate"
          >
            <img src={login} alt="Icono de usuario" className={style.user} />
            Login / Registrate
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
