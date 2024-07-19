//HOOKS
import React from "react";
import { Link } from "react-router-dom";
//STYLE
import style from "./Login.module.css";

const Login = ({ closeModal }) => {

  const handleRegisterClick= () => {
    closeModal();
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Iniciar Sesión</h2>
      <form className={style.form}>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="username">
            Usuario:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="ejemplo@gmail.com"
            className={style.input}
          />
        </div>
        <div className={style.formGroup}>
          <label className={style.label} htmlFor="password">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={style.input}
          />
        </div>
        <div className={style.buy}>
          <input type="submit" value="Ingresar" className={style.button} />
        </div>
      </form>
      <Link to="/formulario" className={style.link} onClick={handleRegisterClick}>
        <p className={style.registrate} >¿No tienes cuenta? Registrate aca</p>
      </Link>
    </div>
  );
};

export default Login;
