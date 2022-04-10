import StyledModal from './StyledModal';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import FormButton from '../../../../components/FormButton/FormButton';
import FormLink from '../../../../components/FormLink/FormLink';

const modalRoot = document.getElementById('modal-root');

const ModalLogout = ({ setM }) => {
  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) setM(false);
  };

  return createPortal(
    <StyledModal>
      <div className="ModalLogoutOverlay" onClick={handleClickBackdrop}>
        <div className="ModalLogoutModal">
          <p className="ModalLogoutQuestion">Вы действительно хотите выйти?</p>
          <div className="ModalLogoutFlex">
            <div className="ModalLogoutButtonYes">
              <FormButton
                title="Выйти"
                handler={() => {
                  alert('токен очищен, пользователь вышел');
                  setM(false);
                }}
              ></FormButton>
            </div>
            <div className="ModalLogoutButtonCancel"  onClick={()=>{setM(false)}}>
              <FormLink title="Отмена" path="/"></FormLink>
            </div>
          </div>
        </div>
      </div>
    </StyledModal>,
    modalRoot,
  );
};

export default ModalLogout;
