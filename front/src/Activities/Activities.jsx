import boxeo from "../../public/activities/boxeo.jpg";
import style from "./Activities.module.css";

const Activities = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>CLASES</h1>
      </div>
      <div className={style.grid}>
        <div className={style.card}>
          <div className={style.imageContainer}>
            <img
              src={boxeo}
              alt="imagen de la actividad"
              className={style.image}
            />
            <h2 className={style.imageText}>Boxeo</h2>
          </div>
          <div className={style.info}>
            <p>Información de clase</p>
            <p>Disponibilidad: N</p>
          </div>
          <div className={style.buy}>
            <input type="submit" value="Reservar" className={style.button} />
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imageContainer}>
            <img
              src={boxeo}
              alt="imagen de la actividad"
              className={style.image}
            />
            <h2 className={style.imageText}>Boxeo</h2>
          </div>
          <div className={style.info}>
            <p>Información de clase</p>
            <p>Disponibilidad: N</p>
          </div>
          <div className={style.buy}>
            <input type="submit" value="Reservar" className={style.button} />
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imageContainer}>
            <img
              src={boxeo}
              alt="imagen de la actividad"
              className={style.image}
            />
            <h2 className={style.imageText}>Boxeo</h2>
          </div>
          <div className={style.info}>
            <p>Información de clase</p>
            <p>Disponibilidad: N</p>
          </div>
          <div className={style.buy}>
            <input type="submit" value="Reservar" className={style.button} />
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imageContainer}>
            <img
              src={boxeo}
              alt="imagen de la actividad"
              className={style.image}
            />
            <h2 className={style.imageText}>Boxeo</h2>
          </div>
          <div className={style.info}>
            <p>Información de clase</p>
            <p>Disponibilidad: N</p>
          </div>
          <div className={style.buy}>
            <input type="submit" value="Reservar" className={style.button} />
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imageContainer}>
            <img
              src={boxeo}
              alt="imagen de la actividad"
              className={style.image}
            />
            <h2 className={style.imageText}>Boxeo</h2>
          </div>
          <div className={style.info}>
            <p>Información de clase</p>
            <p>Disponibilidad: N</p>
          </div>
          <div className={style.buy}>
            <input type="submit" value="Reservar" className={style.button} />
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imageContainer}>
            <img
              src={boxeo}
              alt="imagen de la actividad"
              className={style.image}
            />
            <h2 className={style.imageText}>Boxeo</h2>
          </div>
          <div className={style.info}>
            <p>Información de clase</p>
            <p>Disponibilidad: N</p>
          </div>
          <div className={style.buy}>
            <input type="submit" value="Reservar" className={style.button} />
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imageContainer}>
            <img
              src={boxeo}
              alt="imagen de la actividad"
              className={style.image}
            />
            <h2 className={style.imageText}>Boxeo</h2>
          </div>
          <div className={style.info}>
            <p>Información de clase</p>
            <p>Disponibilidad: N</p>
          </div>
          <div className={style.buy}>
            <input type="submit" value="Reservar" className={style.button} />
          </div>
        </div>
        <div className={style.card}>
          <div className={style.imageContainer}>
            <img
              src={boxeo}
              alt="imagen de la actividad"
              className={style.image}
            />
            <h2 className={style.imageText}>Boxeo</h2>
          </div>
          <div className={style.info}>
            <p>Información de clase</p>
            <p>Disponibilidad: N</p>
          </div>
          <div className={style.buy}>
            <input type="submit" value="Reservar" className={style.button} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
