import { FormModal, Checkbox, СancelBtn } from './ModalAddTransaction.styled';
import FormButton from '../FormButton/FormButton';
import {categories} from '../../service/axios.config';
import { useState } from 'react';

export default function ModalAddTransaction() {
    const [category, setCategory] = useState('Выберите категорию');
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
