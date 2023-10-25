import { useModal } from '@/context/modalContext';

const Modal = ({
  modalID,
  children,
  modalClassName = '',
  modalDialogClassName = '',
}) => {
  const { isShownModal } = useModal();

  return (
    <div
      className={`nh-modal ${modalClassName} ${isShownModal ? 'show' : ''}`}
      id={modalID}
      tabIndex='-1'
      aria-labelledby={modalID}
      aria-hidden={isShownModal}
    >
      <div
        className={`nh-modal-dialog nh-modal-dialog-centered nh-modal-dialog-scrolled ${modalDialogClassName}`}
      >
        <div className='nh-modal-content'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
