import ContactUs from "./ContactUs/ContactUs";
import Membresia from "./Membresias/Membresia";
import Activities from "./Activities/Activities";
import Users from "./Users/Users ";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import FormLogin from "./FormLogin/FormLogin";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Modal from "./Modal/Modal";

import { useState } from 'react';

import style from "./App.module.css";
import { Routes, Route } from "react-router-dom";

function App() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={style.App}>
      <NavBar openModal={openModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membresia" element={<Membresia />} />
        <Route path="/contacto" element={<ContactUs />} />
        <Route path="/actividades" element={<Activities />} />
        <Route path="/usuario" element={<Users />} />
        <Route path="/formulario" element={<FormLogin />} />
      </Routes>
      <Modal show={showModal} onClose={closeModal}>
        <Login onClick={closeModal}/>
      </Modal>
      <Footer />
    </div>
  );
}

export default App;
