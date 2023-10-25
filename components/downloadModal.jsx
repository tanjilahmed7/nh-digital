'use client';

import { useEffect, useState } from 'react';
import Modal from './modal';
import { useModal } from '@/context/modalContext';

// initial form data
const initialFormData = {
  name: '',
  email: '',
};

const DownloadModal = ({ modalID = '', downloadFor = 'portfolio' }) => {
  const { isShownModal, handleModal } = useModal();
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!validateEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log(formData, downloadFor);

    setFormData(initialFormData);
  };

  useEffect(() => {
    setFormData(initialFormData);
    setErrors({});
  }, [isShownModal]);

  const { name, email } = formData || {};

  return (
    <Modal modalID={modalID} modalClassName='modal-portfolio'>
      <div className='nh-modal-header'>
        <h2 className='h2 mb-0'>Download the PDF file</h2>
        <button type='button' onClick={handleModal} className='btn-close'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='currentColor'
          >
            <path d='m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z'></path>
          </svg>
        </button>
      </div>
      <div className='nh-modal-body'>
        <p className='mb-4'>
          Get enlightened with the concept of considering the crucial aspects in
          selecting the perfect Digital Marketing Agency for you.
        </p>
        <form onSubmit={handleSubmit}>
          <div className='row g-3'>
            <div className='col-sm-6'>
              <input
                type='text'
                name='name'
                className={`form-control ${
                  errors.name ? 'form-control-error' : ''
                }`}
                placeholder='Full Name'
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className='col-sm-6'>
              <input
                type='email'
                name='email'
                className={`form-control ${
                  errors.email ? 'form-control-error' : ''
                }`}
                placeholder='Email Address'
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className='col-12 text-end'>
              <button
                type='submit'
                className='btn btn-primary button--wayra'
                disabled={!(name && email)}
              >
                Download
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default DownloadModal;
