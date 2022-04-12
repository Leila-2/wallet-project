import { useState } from 'react';
import Select from 'react-select';
import { ArrowDown } from './ArrowDown';
import { useDispatch } from 'react-redux';
import transactionOperations from '../../store/transactions/transaction-operations';

import { StyledPeriod } from './Period.styled';

import customStyles from './customStyles';

const allMonths = [
  { name: 'Все месяцы', id: '0' },
  { name: 'Январь', id: '1' },
  { name: 'Февраль', id: '2' },
  { name: 'Март', id: '3' },
  { name: 'Апрель', id: '4' },
  { name: 'Май', id: '5' },
  { name: 'Июнь', id: '6' },
  { name: 'Июль', id: '7' },
  { name: 'Август', id: '8' },
  { name: 'Сентябрь', id: '9' },
  { name: 'Октябрь', id: '10' },
  { name: 'Ноябрь', id: '11' },
  { name: 'Декабрь', id: '12' },
];

const Period = ({ setRequestedMonth, setRequestedYear, years }) => {
  const date = new Date();
  const [monthState, setMonthState] = useState(
    () => allMonths[date.getUTCMonth() + 1].name,
  );
  const [yearState, setYearState] = useState(() => date.getFullYear());

  const requestData = {
    month: monthState,
    year: yearState,
  };

  const dispatch = useDispatch();

  const allYears = () => {
    const yearsArr = ['Год', 2019, 2020, 2021, 2022];
    let newYearsArr = [];

    yearsArr.map(year =>
      newYearsArr.push({ name: year, id: yearsArr.indexOf(year) }),
    );
    return newYearsArr;
  };

  const validateMonth = e => {
    const { value, label } = e;
    const monthId = value;
    setMonthState(label);

    if (monthId === '0') {
      setRequestedMonth('');
      return;
    }
    setRequestedMonth(monthId);
    requestData.month = monthId;
    dispatch(transactionOperations.getStatistics(requestData));
  };

  const validateYears = e => {
    const { label } = e;
    if (label === 'Год') {
      return;
    }
    setRequestedYear(label);
    setYearState(label);
    const searchMonth = allMonths.find(item => item.name === requestData.month);
    requestData.month = searchMonth.id;
    requestData.year = label;
    dispatch(transactionOperations.getStatistics(requestData));
  };

  const sortMonth = arr => {
    let optionsMonth = [];
    arr.forEach(({ id, name }) =>
      optionsMonth.push({
        value: id,
        label: name,
      }),
    );

    return optionsMonth;
  };

  const sortYears = arr => {
    let optionsYears = [];
    arr.forEach(({ id, name }) =>
      optionsYears.push({
        value: id,
        label: name,
      }),
    );
    return optionsYears;
  };

  return (
    <>
      <StyledPeriod>
        <form className="form">
          <div className="inputWrapperMonth">
            <Select
              defaultValue="Month"
              name="SelectedMonth"
              onChange={validateMonth}
              options={sortMonth(allMonths)}
              placeholder={monthState}
              styles={customStyles}
            />
            <ArrowDown svg="svgArrowDown" />
          </div>

          <div className="inputWrapperYear">
            <ArrowDown svg="svgArrowDown" />
            <Select
              defaultValue="Year"
              name="SelectedYear"
              onChange={validateYears}
              options={sortYears(allYears())}
              placeholder={yearState}
              styles={customStyles}
            />
          </div>
        </form>
      </StyledPeriod>
    </>
  );
};

export default Period;
