import { useEffect, useState } from 'react';

const useToggleModal = () => {
  const [isShownModal, setIsShownModal] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();

    setIsShownModal((prevState) => !prevState);
  };

  useEffect(() => {
    document.body.style.overflow = isShownModal ? 'hidden' : 'auto';
  }, [isShownModal]);

  return { isShownModal, handleModal };
};

export default useToggleModal;
