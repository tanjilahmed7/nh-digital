'use client';

import { useState } from 'react';
import MagneticButton from './magneticButton';
import { useIsClient } from '../hooks/useIsClient';
import useSendMail from '@/hooks/useSendMail';

// initial data
const initialFormdata = {
  your_name: '',
  your_email: '',
  company: '',
  phone: '',
  your_message: '',
  agreement: false,
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormdata);
  const isClient = useIsClient();
  const { sendMail, loading, message, error } = useSendMail();
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.your_name.trim()) {
      errors.name = 'Name is required';
    }

    if (!validateEmail(formData.your_email)) {
      errors.email = 'Invalid email address';
    }

    if (!formData.your_message.trim()) {
      errors.message = 'Message is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await sendMail(formData);
      setFormData(initialFormdata); // Reset form data
    } catch (err) {
      console.error(err);
    }
  };

  const {
    your_name: your_name,
    your_email: your_email,
    company,
    phone,
    your_message: your_message,
    agreement: agreement,
  } = formData || {};

  if (!isClient) {
    return null;
  }

  return (
    <div className='contact-form' data-aos='fade-up' data-aos-duration='1000'>
      <form onSubmit={handleSubmit}>
        <div className='row g-4'>
          <div className='col-md-6'>
            <div className='form-group'>
              <label htmlFor='your_name'>Your name *</label>
              <input
                type='text'
                name='your_name'
                id='your_name'
                value={your_name}
                onChange={handleChange}
                className={errors.name ? 'form-control-error' : ''}
                disabled={loading}
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='form-group'>
              <label htmlFor='your_email'>Email *</label>
              <input
                type='email'
                name='your_email'
                id='your_email'
                value={your_email}
                onChange={handleChange}
                className={errors.email ? 'form-control-error' : ''}
                disabled={loading}
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='form-group'>
              <label htmlFor='company'>Company (Optional)</label>
              <input
                type='text'
                name='company'
                id='company'
                value={company}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='form-group'>
              <label htmlFor='phone'>Phone no. (Optional)</label>
              <input
                type='text'
                name='phone'
                id='phone'
                value={phone}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
          </div>
          <div className='col-12'>
            <div className='form-group'>
              <label htmlFor='your_message'>Message *</label>
              <textarea
                rows='5'
                name='your_message'
                id='your_message'
                value={your_message}
                onChange={handleChange}
                className={errors.message ? 'form-control-error' : ''}
                disabled={loading}
              ></textarea>
            </div>
          </div>
          <div className='col-12'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                name='agreement'
                id='agreement'
                checked={agreement}
                onChange={handleChange}
                disabled={loading}
              />
              <label className='form-check-label' htmlFor='agreement'>
                I agree to get newsletter and other marketing information.
              </label>
            </div>
          </div>
          <div className='col-12'>
            <MagneticButton>
              <button
                className='btn btn-primary button--wayra contact-form'
                type='submit'
                disabled={!agreement}
              >
                Send Message
              </button>
            </MagneticButton>
          </div>
        </div>
      </form>
      <div className='mt-5'>
        {loading && <p className='sendingMessage'>Sending...</p>}
        {message && <p className='message'>{message}.</p>}
        {error && <p className='error'>{error}.</p>}
      </div>
    </div>
  );
};

export default ContactForm;
