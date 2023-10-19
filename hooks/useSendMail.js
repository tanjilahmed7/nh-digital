import { useState } from 'react';
import axios from 'axios';

const useSendMail = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const sendMail = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        'https://staging.notionhive.com/wordpress/nh-headless/wp-json/nh/v1/contact/',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setMessage('Mail sent successfully');
      return response.data;
    } catch (err) {
      setError('Error sending mail');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { sendMail, loading, message, error };
};

export default useSendMail;
