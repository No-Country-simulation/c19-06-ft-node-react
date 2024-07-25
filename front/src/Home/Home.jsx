//COMPONENTS
import { Link } from "react-router-dom";
import ejercicio from "../../public/Home/gim3.jpg";
//STLYE
import style from "./Home.module.css";
import ejercicio from "../../public/Home/gim3.jpg";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.heroSection}>
        <Link to="/membresia">
          <img src={ejercicio} alt="ejercicio" className={style.image} />
          <div className={style.title}>
            <h1>ASOCIATE</h1>
            <p>Conoce nuestros planes</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
