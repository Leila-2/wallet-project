import Navigation from '../../pages/MainPage/components/Navigation/Navigation';
import Header from '../../pages/MainPage/components/Header/Header';
import { Container } from '../../styles/Container';
import Chart from '../../components/Chart';
import MainBg from '../../components/MainBg/MainBg';
import Modal from '../../components/Modal/Modal';
import ButtonAddTransaction from '../../components/BtnAddTransaction/BtnAddTransaction';
import { useEffect, useState } from 'react';

export default function StatisticsPage() {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Header />
      <Container>
        <MainBg
          RigthComponent={
            <>
              <Navigation /> <Chart />
            </>
          }
        />
        <ButtonAddTransaction onClick={onClose} />
        {showModal && (
          <Modal showModal={showModal} setShowModal={setShowModal} />
        )}
      </Container>
    </>
  );
}
