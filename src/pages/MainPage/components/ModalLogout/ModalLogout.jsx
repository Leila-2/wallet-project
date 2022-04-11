import StyledModal from './StyledModal';
import { createPortal } from 'react-dom';
import FormButton from '../../../../components/FormButton/FormButton';
import FormLink from '../../../../components/FormLink/FormLink';
import React from 'react';

export default function ModalLogout({ setM }) {
  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) setM(false);
  };

  const logoutHandler = () => {
    localStorage.removeItem('AUTH_TOKEN');

    window.location.reload();
  };

  const modalRoot = document.getElementById('modal-root');

  return createPortal(
    <StyledModal>
      <div className="ModalLogoutOverlay" onClick={handleClickBackdrop}>
        <div className="ModalLogoutModal">
          <p className="ModalLogoutQuestion">Вы действительно хотите выйти?</p>
          <div className="ModalLogoutFlex">
            <div className="ModalLogoutButtonYes">
              <FormButton title="Выйти" handler={logoutHandler} />
            </div>
            <div
              className="ModalLogoutButtonCancel"
              onClick={() => {
                setM(false);
              }}
            >
              <FormLink title="Отмена" path="/"></FormLink>
            </div>
          </div>
        </div>
      </div>
    </StyledModal>,
    modalRoot,
  );
}
