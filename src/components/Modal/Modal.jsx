import { useEffect,useState } from 'react';
import { createPortal } from 'react-dom';
import{ ModalWrapper} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children}) {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    window.addEventListener('keydown', onEscapeClose);
    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  });
const onEscapeClose=e=>{
  if(e.code==='Escape'){
    onClose()
  }
}
  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <ModalWrapper onClick={handleClickBackdrop}>
      <div className="content"><button  onClick={onClose}>X</button>{children}</div>
    </ModalWrapper>,
    modalRoot,
  );
}
