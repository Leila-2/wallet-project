import MainBg from '../../components/MainBg/MainBg';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import ButtonAddTransaction from '../../components/BtnAddTransaction/BtnAddTransaction';
import Modal from '../../components/Modal/Modal';
import Media from 'react-media';
import MobileBg from '../../components/MobBg/MobBg';
import TableBalansMobail from '../../components/TableBalans/Table/TableBalansMobail';
import { useState, useEffect } from 'react';
import ModalEditTransaction from '../../components/ModalEditTransaction/ModalEditTransaction';
import { Fragment } from 'react';
import Balance from '../../components/Balance/Balance';
import TableBalance from '../../components/TableBalans/TableBalansElement';
import Currency from '../../components/Currency/Currency';
import { useDispatch, useSelector } from 'react-redux';
import transactionOperations from '../../store/transactions/transaction-operations';
// import  transactionsSelectors  from '../../store/transactions/transaction-selectors';
import { Container } from '../../styles/Container';
import { toggleModal } from '../../store/modal/actions';
import { toggleEditModal } from '../../store/modal/actions';

export default function MainPage() {
  const dispatch = useDispatch();
  // const transactions = useSelector(transactionsSelectors.getTransactions);

  useEffect(() => {
    dispatch(transactionOperations.getTransactions());
  }, [dispatch]);

  const showModal = useSelector(state => state.modal);
  const showModalEdit = useSelector(state => state.editModal);

  const onClose = () => {
    dispatch(toggleModal());
    dispatch(toggleEditModal());
  };

  return (
    <>
      <div>
        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px) and (max-width: 1279px)',
            large: '(min-width: 1280px)',
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

                      <TableBalance />
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
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div>
                            <Navigation />
                            <Balance />
                          </div>

                          <Currency />
                        </div>

                        <TableBalance />
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
                    LeftComponent={<TableBalance />}
                  />
                </>
              )}
            </Fragment>
          )}
        </Media>
      </div>

      <ButtonAddTransaction onClick={onClose} />
      {showModal && <Modal />}
      {showModalEdit && <Modal />}
    </>
  );
}
