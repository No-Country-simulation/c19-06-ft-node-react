//HOOKS
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
//COMPONENTS
import DashboardClient from './pages/DashboardClient/DashboardClient';
import DashboardAdmin from './pages/DashboardAdmin/DashboardAdmin';
import Activities from './pages/Activities/Activities';
import Membresia from './pages/Membresias/Membresia';
import FormLogin from './pages/Login/FormLogin/FormLogin';
import ContactUs from './pages/ContactUs/ContactUs';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Users from './pages/Users/Users';
import Login from './pages/Login/Login';
import Modal from './components/Modal/Modal';
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
        <Route path="/dashboardclient" element={<DashboardClient />} />
<<<<<<< Updated upstream
        <Route path="/mercagoPago" element={<MercagoPagoPage />} />
=======
        <Route path="/dashboardadmin" element={<DashboardAdmin />} />
>>>>>>> Stashed changes
      </Routes>
      <Modal show={showModal} onClose={closeModal}>
        <Login onClick={closeModal} />
      </Modal>
      <WhaspBtn />
      <Footer />
    </div>
  );
}

export default App;
