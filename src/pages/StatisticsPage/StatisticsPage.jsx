import Navigation from '../../pages/MainPage/components/Navigation/Navigation';
import Header from '../../pages/MainPage/components/Header/Header';

import Chart from '../../components/Chart';
import MainBg from '../../components/MainBg/MainBg';
import Modal from '../../components/Modal/Modal';
import ButtonAddTransaction from '../../components/BtnAddTransaction/BtnAddTransaction';
import { useState, useEffect } from 'react';
import Balance from '../../components/Balance/Balance';
import transactionOperations from '../../store/transactions/transaction-operations';
import { useDispatch, useSelector } from 'react-redux';

import Period from '../../components/Period';

import TableStatistic from '../../components/TableStatistic/TableStatistic';

export default function StatisticsPage() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const onClose = () => {
    setShowModal(!showModal);
  };

  const years = 2022 || [];
  const date = new Date();
  const [month, setMonth] = useState(() => date.getUTCMonth() + 1);
  const [year, setYear] = useState(() => date.getFullYear());

  const requestData = {
    month,
    year,
  };

  useEffect(() => {
    dispatch(transactionOperations.getStatistics(requestData));
  }, [dispatch]);

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
            <div>
              <Period
                setRequestedMonth={setMonth}
                setRequestedYear={setYear}
                years={years}
              />
              <TableStatistic />
            </div>
          </>
        }
      ></MainBg>

      <ButtonAddTransaction onClick={onClose} />
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
}
