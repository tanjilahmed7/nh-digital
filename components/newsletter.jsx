'use client';

import { useState } from 'react';
import { useIsClient } from '@/hooks/useIsClient';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, isAgreed);

    setEmail('');
    setIsAgreed(false);
  };

  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }
  return (
    <form onSubmit={handleSubmit} className='newsletter'>
      <h3>
        Interested to get tips & tricks in your inbox? Let’s subscribe our
        newsletter
      </h3>
      <div className='form-group'>
        <input
          type='email'
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          id='agreeWithTermsNewsLetter'
          required
          checked={isAgreed}
          onChange={(e) => setIsAgreed(e.target.checked)}
        />
        <label className='form-check-label' htmlFor='agreeWithTermsNewsLetter'>
          I agree to get newsletter and other marketing information.
        </label>
      </div>
      <div className='magnetic'>
        <button className='btn btn-primary button--wayra' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Newsletter;
