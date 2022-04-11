import MainBg from '../../components/MainBg/MainBg';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import ButtonAddTransaction from '../../components/BtnAddTransaction/BtnAddTransaction';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';
import Balance from '../../components/Balance/Balance';
import TableBalance from '../../components/TableBalans/TableBalansElement';
import Currency from '../../components/Currency/Currency';

export default function MainPage() {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => {
    setShowModal(!showModal);
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
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
}
