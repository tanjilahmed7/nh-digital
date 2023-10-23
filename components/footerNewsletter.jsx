'use client';

import { useState } from 'react';
import MagneticButton from './magneticButton';
import { useIsClient } from '../hooks/useIsClient';

// initial data
const initialFormdata = {
  email: '',
  agreeWithTerms: false,
};

const FooterNewsletter = () => {
  const [formData, setFormData] = useState(initialFormdata);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData(initialFormdata);
  };

  const { email, agreeWithTerms } = formData || {};

  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} id='mc_embed_signup'>
      <h3 className='title'>Stay connected</h3>
      <div className='row g-2'>
        <div className='col-12'>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='col-12'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              id='agreeWithTermsFooter'
              value={agreeWithTerms}
              onChange={handleChange}
            />
            <label className='form-check-label' htmlFor='agreeWithTermsFooter'>
              I agree to get newsletter and other marketing information.
            </label>
          </div>
        </div>
        <div className='col-12'>
          <MagneticButton>
            <button className='btn btn-primary button--wayra' type='submit'>
              Submit
            </button>
          </MagneticButton>
        </div>
      </div>
    </form>
  );
};

export default FooterNewsletter;
