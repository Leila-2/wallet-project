import { FormModal, Checkbox, СancelBtn } from './ModalAddTransaction.styled';
import FormButton from '../FormButton/FormButton';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getAllCategories from '../../store/categories/categories-selectors';
import { getCategories } from '../../store/categories/categories-actions';
import { addTransRequest } from '../../store/transactions/transaction-actions';
import addTransaction from '../../store/transactions/transaction-operations';
export default function ModalAddTransaction() {
  const [category, setCategory] = useState('Выберите категорию');
  const dispatch = useDispatch();
  const [type, setType] = useState(false);
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState();
  const [comment, setComment] = useState('');
  const { income, expense } = useSelector(getAllCategories);
  const { categories } = useSelector(getAllCategories);
  const [cat, setCat] = useState([]);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    if (type) {
      setCat(income);
      setCategory(income);
    } else {
      setCat(expense);
      setCategory(expense);
    }
  }, [expense, income, type]);

  const handleInputChange = e => {
    const { name, value, checked } = e.target;

    switch (name) {
      case 'type':
        setType(checked);
        break;

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

      // no default
    }
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
    const transaction = {
      date,
      type,
      category,
      comment,
      amount,
    };

    const res = dispatch(addTransRequest(transaction));
    // console.log(res);

    // addTransaction(transaction).then(({ data, error }) => {
    //   console.log(data);
    //   if (data) {
    //     console.log('Success', data);
    //     reset();
    //   } else if (error) {
    //     console.log(error.data.message);
    //   }
    // });
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
            onChange={handleInputChange}
          />
          <label htmlFor="checkbox"></label>
        </span>
        <span className="checkbox__label-left">Расход</span>
      </Checkbox>
      <select
        name="category"
        className="select"
        placeholder="Выберите категорию"
        value={category}
        onChange={handleInputChange}
      >
        {categories?.map(el => (
          <option key={el.title} value={el.title}>
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
      <FormButton title={'Добавить'} type="submit" handler={handleSubmit} />
      <СancelBtn>Отмена</СancelBtn>
    </FormModal>
  );
}
