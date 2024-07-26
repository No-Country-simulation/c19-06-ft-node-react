import style from './Activities.module.css';
import CardActivity from '../../components/cardsActivities/CardActivity';
import { actividades } from '../../utils/const';

const Activities = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>CLASES</h1>
      </div>
      <div className={style.grid}>
        {actividades.map((actividad, index) => (
          <CardActivity
            key={index}
            image={actividad.image}
            title={actividad.title}
            info={actividad.info}
            disponibilidad={actividad.disponibilidad}
          />
        ))}
      </div>
    </div>
  );
};

export default Activities;
