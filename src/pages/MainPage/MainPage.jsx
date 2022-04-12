import MainBg from '../../components/MainBg/MainBg';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import ButtonAddTransaction from '../../components/BtnAddTransaction/BtnAddTransaction';
import Modal from '../../components/Modal/Modal';
import Media from 'react-media';
import MobileBg from '../../components/MobBg/MobBg';
import TableBalansMobail from '../../components/TableBalans/Table/TableBalansMobail';
import { useState, useEffect } from 'react';

import { Fragment } from 'react';
import Balance from '../../components/Balance/Balance';
import TableBalance from '../../components/TableBalans/TableBalansElement';
import Currency from '../../components/Currency/Currency';
import { useDispatch, useSelector } from 'react-redux';
import transactionOperations from '../../store/transactions/transaction-operations';
// import  transactionsSelectors  from '../../store/transactions/transaction-selectors';
import { Container } from '../../styles/Container';
import { toggleModal } from '../../store/modal/actions';

export default function MainPage() {
  const dispatch = useDispatch();
  // const transactions = useSelector(transactionsSelectors.getTransactions);

  useEffect(() => {
    dispatch(transactionOperations.getTransactions());
  }, [dispatch]);
  const showModal = useSelector(state => state.modal);

  const onClose = () => {
    dispatch(toggleModal());
  };

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
                      <Balance />
                      {/* <TableBalansMobail transactions={trans} /> */}
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
      <Navigation />
      {/* <Header />

      <MainBg
        RigthComponent={
          <>
           
            <Balance />
            <Currency />
          </>
        }
        LeftComponent={<TableBalance />}
      /> */}
      <ButtonAddTransaction onClick={onClose} />
      {showModal && <Modal />}
    </>
  );
}
