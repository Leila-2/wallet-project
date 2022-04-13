import { FormModal, Checkbox, СancelBtn } from './ModalEditTransaction.styled';
import FormButton from '../FormButton/FormButton';
import { toggleEditModal } from '../../store/modal/actions';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getAllCategories from '../../store/categories/categories-selectors';
import { getCategories } from '../../store/categories/categories-actions';
import { transactionsUpdate } from '../../service/axios.config';
import transactionOperations from '../../store/transactions/transaction-operations';
import transactionsSelectors from '../../store/transactions/transaction-selectors';

export default function ModalEditTransaction() {
  const [category, setCategory] = useState('Выберите категорию');
  const dispatch = useDispatch();
  const [type, setType] = useState(false);
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState();
  const [comment, setComment] = useState('');
  const { income, expense } = useSelector(getAllCategories);
  const { categories } = useSelector(getAllCategories);
  const [cat, setCat] = useState([]);

  const transactions = useSelector(transactionsSelectors.getTransactions);

  // transactions.map(transaction => (
  //   transaction.date;
  //   categories[transaction.category];
  //   transaction.comment;
  // transaction.type;
  //   transaction.amount;
  //   transaction.balance;
  //   transaction.id;

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
    if (type === true) {
      typeCheck = 'incomes';
    } else {
      typeCheck = 'expenses';
    }
    const transaction = {
      date,
      type: typeCheck,
      category,
      comment,
      amount,
    };

    console.log(transaction);
    transactionsUpdate(transaction);
    reset();
    setTimeout(() => {
      dispatch(transactionOperations.getTransactions());
      dispatch(toggleEditModal());
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
      <div className="inputCont">
        <input
          className="numberInput"
          type="number"
          name="amount"
          value={amount}
          placeholder="0.00"
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
        <FormButton title={'Изменить'} handler={handleSubmit} />
        <СancelBtn>Отмена</СancelBtn>
      </div>
    </FormModal>
  );
}
