import style from "./Membresia.module.css";

const Membresia = () => {
  return (
    <div className={style.containermemb}>
      <div className={style.membresia}>
        <div className={style.header}>
          <h3 className={style.title}>Plan Básico</h3>
          <p className={style.price}><span className={style.priceColor}>$50</span> por mes</p>
          <hr className={style.divition} />
        </div>
        <ul className={style.listado}>
          <li>Acceso a las instalaciones del gimnasio</li>
          <li>1 clase grupal por semana</li>
          <li>Cancelación flexible</li>
        </ul>
        <div className={style.buy}>
          <input
            type="submit"
            value="Suscribirse"
            className={style.button}
          />
        </div>
      </div>
      <div className={style.membresia}>
        <div className={style.header}>
          <h3 className={style.title}>Plan Avanzado</h3>
          <p className={style.price}><span className={style.priceColor}>$100</span> por mes</p>
          <hr className={style.divition} />
        </div>
        <ul className={style.listado}>
          <li>Acceso a las instalaciones del gimnasio</li>
          <li>3 clases grupales por semana</li>
          <li>1 clase individual por mes</li>
          <li>Cancelación flexible</li>
        </ul>
        <div className={style.buy}>
          <input
            type="submit"
            value="Suscribirse"
            className={style.button}
          />
        </div>
      </div>
      <div className={style.membresia}>
        <div className={style.header}>
          <h3 className={style.title}>Plan Premium</h3>
          <p className={style.price}><span className={style.priceColor}>$200</span> por mes</p>
          <hr className={style.divition} />
        </div>
        <ul className={style.listado}>
          <li>Acceso ilimitado a las instalaciones del gimnasio</li>
          <li>5 clases grupales por semana</li>
          <li>3 clases individuales por mes</li>
          <li>Sesiones de entrenamiento personal</li>
          <li>Cancelación flexible</li>
        </ul>
        <div className={style.buy}>
          <input
            type="submit"
            value="Suscribirse"
            className={style.button}
          />
        </div>
      </div>
    </div>
  );
};

export default Membresia;