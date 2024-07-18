import { Link } from "react-router-dom";
import login from "../../public/Nav/usuario.png";
import style from "./NavBar.module.css";

const NavBar = ({ openModal }) => {
  return (
    <div className={style.navbar}>
      <Link to="/" className={style.title}>
        GIMNASIO
      </Link>
      <nav className={style.container}>
        <ul className={style.items}>
          <a href="/membresia">
            <li className={style.item}>MEMBRESIAS</li>
          </a>
          <a href="/actividades">
            <li className={style.item}>ACTVIDADES</li>
          </a>
          <a href="">
            <li className={style.item}>CONTACTANOS</li>
          </a>
          <li className={style.login} onClick={openModal}>
            <img src={login} alt="usuario" className={style.user} />
            Login / Registrate
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
