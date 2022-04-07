import { useEffect,useState } from 'react';
import { createPortal } from 'react-dom';
import{ ModalWrapper} from './Modal.styled';
import {ReactComponent as AddIconClose} from './closeBtn.svg'
const modalRoot = document.querySelector('#modal-root');

export default function Modal({ showModal,setShowModal,children}) {
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
      <div className="content"><AddIconClose className="closeBtn" type='button' onClick={onClose}/>
      {children}
      </div>
    </ModalWrapper>,
    modalRoot,
  );
}
