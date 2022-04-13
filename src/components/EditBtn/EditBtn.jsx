import EditSvg from './EditSvg';
import { transactionsUpdate } from '../../service/axios.config';
import transactionOperations from '../../store/transactions/transaction-operations';
import { useDispatch } from 'react-redux';
import { toggleEditModal } from '../../store/modal/actions';

const EditBtn = ({ id }) => {
  const dispatch = useDispatch();

  const handlerEditBtn = () => {
    console.log('edited');
    console.log(id);
    transactionsUpdate(id);
    dispatch(toggleEditModal());

    setTimeout(() => {
      dispatch(transactionOperations.getTransactions());
    }, 1000);
  };

  return (
    <>
      <button onClick={handlerEditBtn}>
        <EditSvg />
      </button>
    </>
  );
};
export default EditBtn;
