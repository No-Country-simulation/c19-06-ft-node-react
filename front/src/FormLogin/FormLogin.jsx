import style from "./FormLogin.module.css";



const FormLogin = () => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>
        Regístrate para
        <br />
        empezar a disfrutar de
        <br />
        nuestro servicios
      </h3>
      <form className={style.form}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          id="name"
          type="text"
          name="nombre"
          placeholder="Ingrese su nombre"
        />
        <label htmlFor="apellido"> Apellido: </label>
        <input
          id="lastname"
          type="text"
          name="apellido"
          placeholder="Ingrese su apellido"
        />
        <label htmlFor="email"> Email: </label>
        <input
          id="email"
          type="text"
          name="correo"
          placeholder="ejample@gmail.com"
        />
        <label htmlFor="constraseña"> Contraseña: </label>
        <input id="password" type="password" name="contraseña" />
        <label htmlFor="teléfono"> Teléfono: </label>
        <input id="phone" type="text" name="teléfono" />
        <label htmlFor="dirección"> Dirección: </label>
        <input id="street" type="text" name="dirección" placeholder="Ingrese su dirección" />
        <label htmlFor="fecha"> Fecha de nacimiento: </label>
        <input id="date" type="text" name="fecha" />
        <div className={style.buy}>
          <input type="submit" value="Registrarse!" className={style.button} />
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
