//HOOKS
import { Link, useLocation } from "react-router-dom";
//COMPONENTS
import login from "../../public/Nav/usuario.png";
//STYLE
import style from "./NavBar.module.css";

const NavBar = ({ openModal }) => {
  const location = useLocation(); // para saber la ruta y aplicar el estilo correspondiente

  return (
    <header className={style.navbar}>
        <Link to="/" className={style.title}>
          GIMNASIO
        </Link>
      <nav className={style.container}>
        <ul className={style.items}>
          <li className={location.pathname === '/membresia' ? `${style.item} ${style.active}` : style.item}>
            <Link to="/membresia" aria-current={location.pathname === '/membresia' ? 'page' : undefined}>
              Membresías
            </Link>
          </li>
          <li className={location.pathname === '/actividades' ? `${style.item} ${style.active}` : style.item}>
            <Link to="/actividades" aria-current={location.pathname === '/actividades' ? 'page' : undefined}>
              Actividades
            </Link>
          </li>
          <li className={location.pathname === '/contactanos' ? `${style.item} ${style.active}` : style.item}>
            <Link to="/contactanos" aria-current={location.pathname === '/contactanos' ? 'page' : undefined}>
              Contáctanos
            </Link>
          </li>
          <li className={style.login} onClick={openModal} role="button" aria-label="Login / Registrate">
            <img src={login} alt="Icono de usuario" className={style.user} />
            Login / Registrate
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;