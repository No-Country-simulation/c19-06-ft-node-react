import style from "./Footer.module.css";
import instagram from "../../public/icons/instagram.png";
import facebook from "../../public/icons/facebook.png";
import twitter from "../../public/icons/twitter.png";
import whatsapp from "../../public/icons/whatsapp.png";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <h1>GIMNASIO</h1>
        <div className={style.social}>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#">
            <img src={whatsapp} alt="WhatsApp" />
          </a>
        </div>
        <div className={style.google}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13136.24981513486!2d-58.398694540306884!3d-34.602582217271554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1721066805714!5m2!1ses!2sar"
            width="200"
            height="200"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className={style.container}>
        <ul className={style.nav}>
          <li>
            <a href="#">Membresías</a>
          </li>
          <li>
            <a href="#">Gimnasios</a>
          </li>
          <li>
            <a href="#">Actividades</a>
          </li>
          <li>
            <a href="#">Contáctanos</a>
          </li>
        </ul>
      </div>
      <div className={style.container}>
        <ul className={style.policity}>
          <li>
            <a href="#">Términos y condiciones</a>
          </li>
          <li>
            <a href="#">Pautas de convivencia</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
