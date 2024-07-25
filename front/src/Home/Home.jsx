import { Link } from "react-router-dom";
import ejercicio from "../../public/Home/imagen5.png";

//STLYE
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.heroSection}>
        <img src={ejercicio} alt="ejercicio" className={style.image} />
        <div className={style.title}>
          <Link to="/membresia" className={style.item}>Únete a Nosotros</Link>
          <p>Explora Nuestros Planes</p>
        </div>
      </div>
    </div>
  );
};

export default Home;