import Navigation from '../../pages/MainPage/components/Navigation/Navigation';
import Header from '../../pages/MainPage/components/Header/Header';
import Media from 'react-media';
import MobileBg from '../../components/MobBg/MobBg';

import { Fragment } from 'react';
import { Container } from '../../styles/Container';
import Chart from '../../components/Chart';
import MainBg from '../../components/MainBg/MainBg';
import Modal from '../../components/Modal/Modal';
import ButtonAddTransaction from '../../components/BtnAddTransaction/BtnAddTransaction';
import { useState, useEffect } from 'react';
import Balance from '../../components/Balance/Balance';
import transactionOperations from '../../store/transactions/transaction-operations';
import { useDispatch, useSelector } from 'react-redux';
import Currency from '../../components/Currency/Currency';
//import TableBalans from '../../components/TableBalans/Table/TableBalans';

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
      <div>
        <Media
          queries={{
            small: '(max-width: 599px)',
            medium: '(min-width: 600px) and (max-width: 1199px)',
            large: '(min-width: 1200px)',
          }}
        >
          {matches => (
            <Fragment>
              {matches.small && (
                <>
                  <Header />
                  <MobileBg>
                    <Container>
                      <Navigation />
                      <Chart />
                      <Period
                        setRequestedMonth={setMonth}
                        setRequestedYear={setYear}
                        years={years}
                      />
                      <TableStatistic />
                    </Container>
                  </MobileBg>
                </>
              )}
              {matches.medium && (
                <>
                  <Header />
                  <MainBg
                    RigthComponent={
                      <>
                        <Navigation />
                        <Balance />
                        <Chart />
                      </>
                    }
                    LeftComponent={
                      <>
                        <Currency />
                        <Period
                          setRequestedMonth={setMonth}
                          setRequestedYear={setYear}
                          years={years}
                        />
                        <TableStatistic />
                      </>
                    }
                  />
                </>
              )}
              {matches.large && (
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
                  />
                </>
              )}
            </Fragment>
          )}
        </Media>
      </div>

      <ButtonAddTransaction onClick={onClose} />
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
}
