import { createPortal } from 'react-dom';
import { ModalWrapper } from './Modal.styled';
import { ReactComponent as AddIconClose } from './closeBtn.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../store/modal/actions';
import ModalAddTransaction from '../ModalAddTransaction/ModalAddTransaction';
import ModalEditTransaction from '../ModalEditTransaction/ModalEditTransaction';
import { useEffect } from 'react';
const modalRoot = document.querySelector('#modal-root');

export default function Modal() {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(toggleModal());
  };

  const onCloseEdt = () => {
    dispatch(toggleEditModal());
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscapeClose);
    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  });
  const onEscapeClose = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const onSubmit = () => {
    dispatch();
  };

  const showModal = useSelector(state => state.modal);
  const showModalEdit = useSelector(state => state.editModal);

  return createPortal(
    <ModalWrapper onClick={handleClickBackdrop}>
      {showModal && (
        <div className="content">
          <AddIconClose className="closeBtn" type="button" onClick={onClose} />
          <p className="title">Добавить транзакцию</p>
          <ModalAddTransaction />
        </div>
      )}

      {showModalEdit && !showModal && (
        <div className="content">
          <AddIconClose
            className="closeBtn"
            type="button"
            onClick={onCloseEdt}
          />
          <p className="title">Изменить транзакцию</p>
          <ModalEditTransaction />
        </div>
      )}
    </ModalWrapper>,
    modalRoot,
  );
}
