import style from './CardActivity.module.css';

const CardActivity = ({ image, title, info, disponibilidad }) => {
  return (
    <div className={style.card}>
      <div className={style.imageContainer}>
        <img src={image} alt="imagen de la actividad" className={style.image} />
        <h2 className={style.imageText}>{title}</h2>
      </div>
      <div className={style.info}>
        <p>{info}</p>
        <p>{disponibilidad}</p>
      </div>
      <div className={style.buy}>
        <input type="submit" value="Reservar" className={style.button} />
      </div>
    </div>
  );
};

export default CardActivity;
