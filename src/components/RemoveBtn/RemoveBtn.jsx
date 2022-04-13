import TrashSvg from './TrashSvg';
import { transactionsDelete } from '../../service/axios.config';
import transactionOperations from '../../store/transactions/transaction-operations';
import { useDispatch } from 'react-redux';

const RemoveBtn = ({ id }) => {
  const dispatch = useDispatch();

  const handlerRemoveBtn = () => {
    console.log('removed');
    console.log(id);
    transactionsDelete(id);

    setTimeout(() => {
      dispatch(transactionOperations.getTransactions());
    }, 1000);
  };

  return (
    <button onClick={handlerRemoveBtn}>
      <TrashSvg />
    </button>
  );
};
export default RemoveBtn;
