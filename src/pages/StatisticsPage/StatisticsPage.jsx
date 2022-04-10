import Navigation from '../../pages/MainPage/components/Navigation/Navigation';
import Header from '../../pages/MainPage/components/Header/Header';

import Chart from '../../components/Chart';
import MainBg from '../../components/MainBg/MainBg';
import Modal from '../../components/Modal/Modal';
import ButtonAddTransaction from '../../components/BtnAddTransaction/BtnAddTransaction';
import { useState } from 'react';
import Balance from '../../components/Balance/Balance';
// import TableBalance from '../../components/TableBalans/TableBalansElement';
import TableStatistic from '../../components/TableStatistic/TableStatistic';

export default function StatisticsPage() {
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
            <Navigation /> <Balance />
          </>
        }
        LeftComponent={
          <>
            <Chart />
            <TableStatistic />
          </>
        }
      />

      <ButtonAddTransaction onClick={onClose} />
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
}
