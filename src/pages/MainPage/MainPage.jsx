import MainBg from '../../components/MainBg/MainBg';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import ButtonAddTransaction from '../../components/BtnAddTransaction/BtnAddTransaction';
import Modal from '../../components/Modal/Modal';
import Media from 'react-media';
import MobileBg from '../../components/MobBg/MobBg';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment } from 'react';
import Balance from '../../components/Balance/Balance';
import TableBalance from '../../components/TableBalans/TableBalansElement';
import Currency from '../../components/Currency/Currency';
import { useDispatch, useSelector } from 'react-redux';
import transactionOperations from '../../store/transactions/transaction-operations';
import { Container } from '../../styles/Container';
import { toggleModal } from '../../store/modal/actions';
import authSelectors from '../../store/auth/authSelectors';

export default function MainPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const showModal = useSelector(state => state.modal);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(transactionOperations.getTransactions());
    }
  }, [dispatch, isLoggedIn]);

  const onClose = () => {
    dispatch(toggleModal());
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
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
    </>
  );
}
