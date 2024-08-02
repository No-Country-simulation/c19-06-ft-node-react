//STYLE
import { useState } from 'react';
import FormRegister from '../../../components/formRegiter/FormRegister';
import Modal from '../../../components/Modal/Modal';
import Login from '../Login';
import style from './FormLogin.module.css';

const FormLogin = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={style.container}>
      <div className={style.containerform}>
        <h3 className={style.title}>
          Regístrate para
          <br />
          empezar a disfrutar de
          <br />
          nuestro servicios
        </h3>
        <FormRegister />
        <h3 className={style.login}>
          ya tienes cuenta?
          <br />
          <span onClick={openModal}>Iniciar sesion</span>
        </h3>
      </div>
      <Modal show={showModal} onClose={closeModal}>
        <Login onClick={closeModal} />
      </Modal>
    </div>
  );
};

export default FormLogin;
