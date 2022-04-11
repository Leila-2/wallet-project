import { FormModal, Checkbox, СancelBtn } from './ModalAddTransaction.styled';
import FormButton from '../FormButton/FormButton';
import { categories } from '../../service/axios.config';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getAllCategories from '../../store/categories/categories-selectors';
import { getCategories } from '../../store/categories/categories-actions';

export default function ModalAddTransaction() {
  const [category, setCategory] = useState('Выберите категорию');
  const dispatch = useDispatch();

  const { categories } = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

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
          />
          <label htmlFor="checkbox"></label>
        </span>
        <span className="checkbox__label-left">Расход</span>
      </Checkbox>
      <select
        className="select"
        placeholder="Выберите категорию"
        value={category}
      >
        {categories?.map(el => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
      <div className="inputCont">
        <input
          className="numberInput"
          type="number"
          placeholder="0.00"
          required
        />
        <input className="dateInput" type="date" required />
      </div>
      <textarea className="comment" name="comment" placeholder="Комментарий" />
      <FormButton title={'Добавить'} />
      <СancelBtn>Отмена</СancelBtn>
    </FormModal>
  );
}
