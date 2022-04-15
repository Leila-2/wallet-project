import { FormModal, Checkbox, СancelBtn } from './ModalAddTransaction.styled';
import FormButton from '../FormButton/FormButton';
import { toggleModal } from '../../store/modal/actions';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getAllCategories from '../../store/categories/categories-selectors';
import { getCategories } from '../../store/categories/categories-actions';
import { transactionsCreate } from '../../service/axios.config';
import transactionOperations from '../../store/transactions/transaction-operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ModalAddTransaction() {
  const [category, setCategory] = useState('Выберите категорию');
  const dispatch = useDispatch();
  const [type, setType] = useState(false);
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [comment, setComment] = useState('');
  const { categories } = useSelector(getAllCategories);
  const [cat, setCat] = useState([]);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleInputChange = e => {
    const { name, value, checked } = e.target;
    switch (name) {
      case 'amount':
        setAmount(value);
        break;

      case 'category':
        setCategory(value);
        break;

      case 'date':
        setDate(value);
        break;

      case 'comment':
        setComment(value);
        break;
    }
  };
  const handleCheckbox = () => {
    setType(!type);
  };

  const reset = () => {
    setType(false);
    setCat([]);
    setAmount('');
    setDate('');
    setComment('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    let typeCheck = '';
    let categoryIncomes = '';

    if (type) {
      typeCheck = 'incomes';
      categoryIncomes = 'incomes';
      // toast.success('Доход добавлен');
    } else {
      typeCheck = 'expenses';
      categoryIncomes = category;
      // toast.success('Расход добавлен');
    }

    const transaction = {
      date,
      type: typeCheck,
      category: categoryIncomes,
      comment,
      amount,
    };
    if (transaction.amount === '' || transaction.date === '') {
      toast.warning('Заполните поля формы');
    }
    transactionsCreate(transaction);
    reset();
    setTimeout(() => {
      dispatch(transactionOperations.getTransactions());
      dispatch(toggleModal());
    }, 1000);
  };

  return (
    <FormModal className="form">
      <Checkbox>
        <span className="checkbox__label-right">Доход</span>
        <span className="checkbox__toggle">
          <input
            name="type"
            type="checkbox"
            className="checkboxInput"
            id="checkbox"
            checked={type}
            onChange={handleCheckbox}
          />
          <label htmlFor="checkbox"></label>
        </span>
        <span className="checkbox__label-left">Расход</span>
      </Checkbox>
      {!type && (
        <select
          name="category"
          className="select"
          value={category}
          onChange={handleInputChange}
        >
          <option disabled>Выберите категорию</option>
          {categories?.map(el => (
            <option key={el.title} value={el.value}>
              {el.title}
            </option>
          ))}
        </select>
      )}
      <div className="inputCont">
        <input
          className="numberInput"
          type="number"
          name="amount"
          value={amount}
          placeholder="0.00"
          min="0"
          onChange={handleInputChange}
          required
        />
        <input
          className="dateInput"
          type="date"
          name="date"
          value={date}
          required
          onChange={handleInputChange}
        />
      </div>
      <textarea
        className="comment"
        name="comment"
        value={comment}
        placeholder="Комментарий"
        onChange={handleInputChange}
      />
      <div className="formBtn">
        <FormButton title={'Добавить'} handler={handleSubmit} />
        <button onClick={reset} className="resetButton">
          Отмена
        </button>
      </div>
    </FormModal>
  );
}
