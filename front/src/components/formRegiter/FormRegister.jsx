import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { endPoints } from '../../services/endPoints/endPoints';
import Swal from 'sweetalert2';
import style from './FormRegister.module.css';

const initialForm = {
  email: '',
  password: '',
  name: '',
  last_name: '',
  phone_number: '',
  address: '',
  birth_date: '',
};

const FormRegister = () => {
  const [formData, handleChange, setFormData] = useForm(initialForm);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');

  const onValidate = (formData) => {
    let errors = {};

    let regexName = /^[a-zA-Z\s]{2,20}$/;
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let regexphone_number = /^[0-9]{5,15}$/;
    let regexpassword = /^[a-zA-Z0-9!@#$%^&*()_+]{6,20}$/;

    if (!formData.name.trim()) {
      errors.name = 'El campo "Nombre" no debe ser vacío.';
    } else if (!regexName.test(formData.name)) {
      errors.name = 'El campo "Nombre" es incorrecto.';
    }

    if (!formData.last_name.trim()) {
      errors.last_name = 'El campo "Apellido" no debe ser vacío.';
    } else if (!regexName.test(formData.last_name)) {
      errors.last_name = 'El campo "Apellido" es incorrecto.';
    }

    if (!formData.email.trim()) {
      errors.email = 'El campo "Email" no debe ser vacío.';
    } else if (!regexEmail.test(formData.email)) {
      errors.email = 'El campo "Email" es incorrecto.';
    }

    if (!formData.phone_number.trim()) {
      errors.phone_number = 'El campo "Teléfono" no debe ser vacío.';
    } else if (!regexphone_number.test(formData.phone_number)) {
      errors.phone_number =
        'El campo "Teléfono" es incorrecto, debe tener entre 5 y 15 dígitos.';
    }

    if (!formData.address.trim()) {
      errors.address = 'El campo "Dirección" no debe ser vacío.';
    }

    if (!formData.password.trim()) {
      errors.password = 'El campo "Contraseña" no debe ser vacío.';
    } else if (!regexpassword.test(formData.password)) {
      errors.password =
        'La contraseña debe tener entre 6 y 20 caracteres y puede incluir letras, números y caracteres especiales.';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = onValidate(formData);
    setErrors(err);
    setServerError('');

    if (Object.keys(err).length === 0) {
      try {
        const response = await fetch(endPoints.user.getUser, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorData = await response.json();

          if (errorData.errors) {
            setServerError(
              'Error en la solicitud: ' + errorData.errors.join(', ')
            );
          } else {
            setServerError('Error en la solicitud.');
          }
          return;
        }

        const data = await response.json();
        setFormData(initialForm);
        console.log(data);
        Swal.fire({
          text: 'Registro exitoso',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
        setServerError('Error en la solicitud.');
      }
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Ingrese su nombre"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className={style.error}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="last_name">Apellido:</label>
        <input
          id="last_name"
          type="text"
          name="last_name"
          placeholder="Ingrese su apellido"
          value={formData.last_name}
          onChange={handleChange}
        />
        {errors.last_name && <p className={style.error}>{errors.last_name}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className={style.error}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className={style.error}>{errors.password}</p>}
      </div>

      <div>
        <label htmlFor="phone_number">Teléfono:</label>
        <input
          id="phone_number"
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
        />
        {errors.phone_number && (
          <p className={style.error}>{errors.phone_number}</p>
        )}
      </div>

      <div>
        <label htmlFor="address">Dirección:</label>
        <input
          id="address"
          type="text"
          name="address"
          placeholder="Ingrese su dirección"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <p className={style.error}>{errors.address}</p>}
      </div>

      <div>
        <label htmlFor="birth_date">Fecha de nacimiento:</label>
        <input
          id="birth_date"
          type="date"
          name="birth_date"
          value={formData.birth_date}
          onChange={handleChange}
        />
      </div>

      <div className={style.buy}>
        <input type="submit" value="Registrar!" className={style.button} />
      </div>

      {serverError && <p className={style.error}>{serverError}</p>}
    </form>
  );
};

export default FormRegister;
