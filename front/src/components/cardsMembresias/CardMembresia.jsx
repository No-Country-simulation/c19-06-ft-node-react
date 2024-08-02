import { Link } from 'react-router-dom';
import style from './CardMembresia.module.css';

const CardMembresia = ({ title, price, listado }) => {
  return (
    <div className={style.membresia}>
      <div className={style.header}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.price}>
          <span className={style.priceColor}>${price}</span> por mes
        </p>
        <hr className={style.divition} />
      </div>
      <ul className={style.listado}>
        {listado.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className={style.buy}>
        <Link to="/formulario">
          <input type="submit" value="Suscribirse" className={style.button} />
        </Link>
      </div>
    </div>
  );
};

export default CardMembresia;
