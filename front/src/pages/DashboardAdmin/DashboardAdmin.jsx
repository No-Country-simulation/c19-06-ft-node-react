import User from '../Users/Users';
import Modal from 'react-modal';
import 'react-datepicker/dist/react-datepicker.css';
import style from './DashboardAdmin.module.css';
import { useState } from 'react';
import { users } from '../../utils/const';
import FormRegister from '../../components/formRegiter/FormRegister';

Modal.setAppElement('#root');

const user = users;

const DashboardAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState(user);

  const [newUser, setNewUser] = useState({
    id: '',
    email: '',
    password: '',
    name: '',
    last_name: '',
    phone_number: '',
    address: '',
    birth_date: '',
    role: '',
    classes: [],
  });

  const handleDeleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleDeleteReservation = (userIndex, classIndex) => {
    const updatedUsers = [...users];
    updatedUsers[userIndex].classes.splice(classIndex, 1);
    setUsers(updatedUsers);
  };

  return (
    <div className={style.container}>
      <section className={style.content}>
        <div className={style.welcomeUser}>
          <h2>¡Hola! Administrador</h2>
        </div>

        <div className={style.contWelcome}>
          <div>
            <User />
          </div>

          <section className={style.contUser}>
            <div className={style.addUser}>
              <h3>Agregar Usuario</h3>
              <FormRegister />
            </div>
          </section>
        </div>
      </section>

      <section className={style.classesSection}>
        <h3>Usuarios</h3>
        <table className={style.classesTable}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          {users.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan="2">No hay usuarios registrados</td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {users.map((user, userIndex) => (
                <tr key={userIndex}>
                  <td>{`${user.name} ${user.last_name}`}</td>
                  <td>
                    <button
                      onClick={() => openModal(user)}
                      className={style.deleteButton}
                    >
                      Ver Clases
                    </button>
                    <button
                      onClick={() => handleDeleteUser(userIndex)}
                      className={style.deleteButton}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </section>

      {selectedUser && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Clases del Usuario"
          className={style.modal}
          overlayClassName={style.overlay}
        >
          <h3>
            Clases de {selectedUser.name} {selectedUser.last_name}
          </h3>
          {selectedUser.classes && selectedUser.classes.length === 0 ? (
            <p>No tiene clases reservadas</p>
          ) : (
            <table className={style.claseItem}>
              <thead>
                <tr>
                  <th>Clase</th>
                  <th>Fecha</th>
                  <th>Inicio</th>
                  <th>Fin</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {selectedUser.classes.map((classItem, classIndex) => (
                  <tr key={classIndex}>
                    <td>{classItem.name}</td>
                    <td>{classItem.date}</td>
                    <td>{classItem.startTime}</td>
                    <td>{classItem.endTime}</td>
                    <td>
                      <button
                        onClick={() =>
                          handleDeleteReservation(
                            users.indexOf(selectedUser),
                            classIndex
                          )
                        }
                        className={style.deleteButton}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <button onClick={closeModal} className={style.closeModalButton}>
            Cerrar
          </button>
        </Modal>
      )}
    </div>
  );
};

export default DashboardAdmin;
