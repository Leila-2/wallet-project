import { useEffect, useState } from 'react';
import css from './Currency.module.css';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import currencyImageMobile from '../../icons/currency-mobile.svg';
import currencyImageTablet from '../../icons/currency-tablet.svg';
import currencyImageDesktop from '../../icons/currency-desktop.svg';
import fetchData from '../../service/currencyAPI';

const useStyles = makeStyles({
  sidebar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    minWidth: 'auto',
    minHeight: 'auto',
    overflow: 'auto',
  },

  table_container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '348px',
    minWidth: '280px',
    maxHeight: '347px',
    borderRadius: '30px',
    background: '#4a56e2',

    '@media (min-width: 1280px)': {
      height: '347px',
    },
  },

  table: {
    '@media (max-width: 767px)': {
      marginLeft: 'auto',
      marginRight: 'auto',
      minWidth: 'auto',
      minHeight: 'auto',
      width: '280px',
      height: '174px',
      overflow: 'hidden',
    },
  },

  head: {
    background: '#626cdc',
  },

  header: {
    fontFamily: 'Circe, sans-serif',
    fontSize: '18px',
    fontWeight: '700',
    paddingTop: '12px',
    paddingBottom: '12px',
    color: '#ffffff',
    borderBottom: '0px',

    '@media (min-width: 768px)': {
      paddingTop: '17px',
      paddingBottom: '17px',
    },
  },

  body: {
    backgroundSize: 'contain',
    backgroundPosition: 'bottom',

    '@media (max-width: 767px)': {
      backgroundImage: `url(${currencyImageMobile})`,
      backgroundRepeat: 'no-repeat',
    },

    '@media (min-width: 768px) and (max-width: 1279px) ': {
      backgroundImage: `url(${currencyImageTablet})`,
    },
  },

  background: {
    display: 'none',

    '@media (min-width:1280px)': {
      display: 'block',
      marginTop: '30px',
      height: '130px',
      backgroundImage: `url(${currencyImageDesktop})`,
    },
  },

  name: {
    fontFamily: 'Poppins, san-serif',
    fontSize: '16px',
    fontWeight: '400',
    paddingTop: '10px',
    paddingBottom: '10px',
    color: '#ffffff',
    borderBottom: '0px',
  },

  item: {
    fontFamily: 'Poppins, san-serif',
    fontSize: '16px',
    fontWeight: '400',
    color: '#ffffff',
    borderBottom: '0px',
  },
});

function Currency() {
  const [currency, setCurrency] = useState([]);
  const s = useStyles();

  const fetch = async () => {
    try {
      const data = await fetchData();
      setCurrency([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className={css.sidebar}>
        <TableContainer className={s.table_container}>
          <Table className={s.table} size="small">
            <TableHead className={s.head}>
              <TableRow className={s.head_row}>
                <TableCell className={s.header}>Валюта</TableCell>
                <TableCell align="center" className={s.header}>
                  Покупка
                </TableCell>
                <TableCell align="center" className={s.header}>
                  Продажа
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={s.body}>
              {currency?.map(element => (
                <TableRow key={element.ccy}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                    className={s.name}
                  >
                    {element.ccy}
                  </TableCell>
                  <TableCell align="center" className={s.item}>
                    {Math.floor(element.buy * 100) / 100}
                  </TableCell>
                  <TableCell align="center" className={s.item}>
                    {Math.floor(element.sale * 100) / 100}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className={s.background}></div>
        </TableContainer>
      </div>
    </>
  );
}

export default Currency;
