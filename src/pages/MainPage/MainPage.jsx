import MainBg from '../../components/MainBg/MainBg';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import ButtonAddTransaction from '../../components/BtnAddTransaction/BtnAddTransaction';
import Modal from '../../components/Modal/Modal';
import { useEffect, useState } from 'react';
import { Container } from '../../styles/Container';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../store/modal/actions';

export default function MainPage() {
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.modal);

  const onClose = () => {
    dispatch(toggleModal());
  };

  return (
    <>
      <Header />

      <MainBg
        RigthComponent={
          <>
            <Navigation />
            <Balance />
            <Currency />
          </>
        }
        LeftComponent={<TableBalance />}
      />
      <ButtonAddTransaction onClick={onClose} />
      {showModal && <Modal />}
    </>
  );
}
