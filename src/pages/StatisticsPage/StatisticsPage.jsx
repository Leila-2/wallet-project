import Navigation from '../../pages/MainPage/components/Navigation/Navigation';
import Header from '../../pages/MainPage/components/Header/Header';

import Chart from '../../components/Chart';
import MainBg from '../../components/MainBg/MainBg';
import Modal from '../../components/Modal/Modal';
import ButtonAddTransaction from '../../components/BtnAddTransaction/BtnAddTransaction';
import { useState } from 'react';
import Balance from '../../components/Balance/Balance';
import TableBalance from '../../components/TableBalans/TableBalansElement';
import Period from '../../components/Period';

export default function StatisticsPage() {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => {
    setShowModal(!showModal);
  };

  const years = 2022 || [];
  const date = new Date();
  const [month, setMonth] = useState(() => date.getUTCMonth() + 1);
  const [year, setYear] = useState(() => date.getFullYear());

  return (
    <>
      <Header />

      <MainBg
        RigthComponent={
          <>
            <Navigation /> <Balance />
          </>
        }
        LeftComponent={<>
          <Chart />
          <Period
          setRequestedMonth={setMonth}
          setRequestedYear={setYear}
          years={years}
          />
        </>}
      />
      <ButtonAddTransaction onClick={onClose} />
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
}
