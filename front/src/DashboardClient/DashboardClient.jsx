//STYLE
import style from './DashboardClient.module.css';

const DashboardClient = () => {

    return(
        <div className={style.container}>
            <div className={style.navbarcontainer}>
                <div className={style.title}>
                    <h1>
                        Gimnasio
                    </h1>
                </div>
                <nav>
                <ul>
                    <li>
                        Perfil
                    </li>
                    <li>
                        Actividades
                    </li>
                    <li>
                        Entrenadores
                    </li>
                    <li>
                        Reserva de clases
                    </li>
                </ul>
                </nav>
                <div>
                    <input type="submit" value='Cerrar sesión' />
                </div>
            </div>
        </div>
    )
};

export default DashboardClient;