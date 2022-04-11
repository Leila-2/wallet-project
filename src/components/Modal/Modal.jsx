import { createPortal } from 'react-dom';
import { ModalWrapper } from './Modal.styled';
import { ReactComponent as AddIconClose } from './closeBtn.svg'
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../store/modal/actions';
import ModalAddTransaction from '../ModalAddTransaction/ModalAddTransaction';

const modalRoot = document.querySelector('#modal-root');

export default function Modal() {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(toggleModal());
  };
  useEffect(() => {
    window.addEventListener('keydown', onEscapeClose);
    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  });
  const onEscapeClose = e => {
    if (e.code === 'Escape') {
      onClose()
    }
  }
  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const onSubmit = () => {
    dispatch();
  };

  return createPortal(
    <ModalWrapper onClick={handleClickBackdrop}>
      <div className="content"><AddIconClose className="closeBtn" type='button' onClick={onClose} />
        <p className="title">Добавить транзакцию</p>
        <ModalAddTransaction/>
      </div>
    </ModalWrapper>,
    modalRoot,
  );
}
