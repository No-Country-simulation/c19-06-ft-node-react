//HOOKS
import { Routes, Route, useLocation  } from "react-router-dom";
import { useState } from 'react';
//COMPONENTS
import DashboardClient from "./DashboardClient/DashboardClient";
import Activities from "./Activities/Activities";
import Membresia from "./Membresias/Membresia";
import FormLogin from "./FormLogin/FormLogin";
import ContactUs from "./ContactUs/ContactUs";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import Users from "./Users/Users ";
import Login from "./Login/Login";
import Modal from "./Modal/Modal";
import Home from "./Home/Home";
//STYLE
import style from "./App.module.css";

function App() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const location = useLocation();

  return (
    <div className={style.App}>
      {location.pathname !== '/dashboardclient' && <NavBar openModal={openModal} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membresia" element={<Membresia />} />
        <Route path="/contacto" element={<ContactUs />} />
        <Route path="/actividades" element={<Activities />} />
        <Route path="/usuario" element={<Users />} />
        <Route path="/formulario" element={<FormLogin />} />
        <Route path="/dashboardclient" element={<DashboardClient/>}/>
      </Routes>
      <Modal show={showModal} onClose={closeModal}>
        <Login onClick={closeModal}/>
      </Modal>
      {location.pathname !== '/dashboardclient' && <Footer />}
    </div>
  );
}

export default App;
