//HOOKS
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
//COMPONENTS
import DashboardClient from './DashboardClient/DashboardClient';
import Activities from './pages/Activities/Activities';
import Membresia from './pages/Membresias/Membresia';
import FormLogin from './FormLogin/FormLogin';
import ContactUs from './pages/ContactUs/ContactUs';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Users from './Users/Users ';
import Login from './Login/Login';
import Modal from './Modal/Modal';
import Home from './pages/Home/Home';
import MercagoPagoPage from './pages/MercadoPago/mp';
//STYLE
import style from './App.module.css';
import WhaspBtn from './components/btnWhaps/WhaspBtn';

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
      {location.pathname !== '/dashboardclient' && (
        <NavBar openModal={openModal} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membresia" element={<Membresia />} />
        <Route path="/contacto" element={<ContactUs />} />
        <Route path="/actividades" element={<Activities />} />
        <Route path="/usuario" element={<Users />} />
        <Route path="/formulario" element={<FormLogin />} />
        <Route path="/dashboardclient" element={<DashboardClient />} />
        <Route path="/mercagoPago" element={<MercagoPagoPage />} />
      </Routes>
      <Modal show={showModal} onClose={closeModal}>
        <Login onClick={closeModal} />
      </Modal>
      <WhaspBtn />
      {location.pathname !== '/dashboardclient' && <Footer />}
    </div>
  );
}

export default App;
