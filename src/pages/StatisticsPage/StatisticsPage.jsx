import Navigation from '../../pages/MainPage/components/Navigation/Navigation';
import Header from '../../pages/MainPage/components/Header/Header';
import Media from 'react-media';
import MobileBg from '../../components/MobBg/MobBg';

import { Fragment } from 'react';
import Chart from '../../components/Chart';
import MainBg from '../../components/MainBg/MainBg';
import Modal from '../../components/Modal/Modal';
import ButtonAddTransaction from '../../components/BtnAddTransaction/BtnAddTransaction';
import { useState } from 'react';
import Balance from '../../components/Balance/Balance';
import { Container } from '../../styles/Container';

import Period from '../../components/Period';

// import TableBalance from '../../components/TableBalans/TableBalansElement';
import TableStatistic from '../../components/TableStatistic/TableStatistic';

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
              {matches.medium && <p>I am medium!</p>}
              {matches.large && <p>I am large!</p>}
            </Fragment>
          )}
        </Media>
      </div>

      {/* <ButtonAddTransaction onClick={onClose} />
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />} */}
    </>
  );
}
