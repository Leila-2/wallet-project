import TrashSvg from './TrashSvg';
import { transactionsDelete } from '../../service/axios.config';

const RemoveBtn = ({ id }) => {
  const handlerRemoveBtn = () => {
    console.log('removed');
    console.log(id);
    transactionsDelete(id);
  };

  return (
    <button onClick={handlerRemoveBtn}>
      <TrashSvg />
    </button>
  );
};
export default RemoveBtn;
