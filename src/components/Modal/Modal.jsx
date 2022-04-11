import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalWrapper, Checkbox, СancelBtn } from './Modal.styled';
import { ReactComponent as AddIconClose } from './closeBtn.svg';
import FormButton from '../FormButton/FormButton';
import { useDispatch } from 'react-redux';
const modalRoot = document.querySelector('#modal-root');

export default function Modal({ showModal, setShowModal, children }) {
  const dispatch = useDispatch();
  const onClose = () => {
    setShowModal(!showModal);
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

  return createPortal(
    <ModalWrapper onClick={handleClickBackdrop}>
      <div className="content">
        <AddIconClose className="closeBtn" type="button" onClick={onClose} />
        <p className="title">Добавить транзакцию</p>
        <form className="form">
          <Checkbox>
            <span className="checkbox__label-right">Доход</span>
            <span className="checkbox__toggle">
              <input
                name="type"
                type="checkbox"
                className="checkboxInput"
                id="checkbox"
              />
              <label htmlFor="checkbox"></label>
            </span>
            <span className="checkbox__label-left">Расход</span>
          </Checkbox>
          <select className="select" placeholder="Выберите категорию" />
          <div className="inputCont">
            <input
              className="numberInput"
              type="number"
              placeholder="0.00"
              required
            />
            <input className="dateInput" type="date" required />
          </div>
          <textarea
            className="comment"
            name="comment"
            placeholder="Комментарий"
          />
          <FormButton handler={onSubmit} title={'Добавить'} />
          <СancelBtn>Отмена</СancelBtn>
        </form>
      </div>
    </ModalWrapper>,
    modalRoot,
  );
}
