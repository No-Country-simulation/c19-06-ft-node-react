//STYLE
import style from "./Membresia.module.css";

const Membresia = () => {
  return (
    <div className={style.containermemb}>
          <div className={style.membresia}>
            <div className={style.header}>
              <h3 className={style.title}>PREMIUM</h3>
              <p className={style.price}>$200 por mes</p>
              <hr className={style.divition} />
            </div>
            <ul className={style.listado}>
              <li>pase al gim gratuito</li>
              <li>2 clases</li>
              <li>Cancela cuando quieras</li>
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
              <h3 className={style.title}>PREMIUM</h3>
              <p className={style.price}>$200 por mes</p>
              <hr className={style.divition} />
            </div>
            <ul className={style.listado}>
              <li>pase al gim gratuito</li>
              <li>2 clases</li>
              <li>Cancela cuando quieras</li>
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
              <h3 className={style.title}>PREMIUM</h3>
              <p className={style.price}>$200 por mes</p>
              <hr className={style.divition} />
            </div>
            <ul className={style.listado}>
              <li>pase al gim gratuito</li>
              <li>2 clases</li>
              <li>Cancela cuando quieras</li>
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
