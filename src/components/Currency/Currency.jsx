import { useEffect, useState } from 'react';
import { StyledCurrency } from './Cyrrency.styled';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';
import fetchData from '../../service/currencyAPI';

function Currency() {
  const [currency, setCurrency] = useState([]);
//   const s = useStyles();

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
      <StyledCurrency>
        <TableContainer className="table_container">
          <Table className="table" size="small">
            <TableHead className="head">
              <TableRow className="head_row">
                <TableCell className="header">Валюта</TableCell>
                <TableCell align="center" className="header">
                  Покупка
                </TableCell>
                <TableCell align="center" className="header">
                  Продажа
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="body">
              {currency?.map(element => (
                <TableRow key={element.ccy}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                    className="name"
                  >
                    {element.ccy}
                  </TableCell>
                  <TableCell align="center" className="item">
                    {Math.floor(element.buy * 100) / 100}
                  </TableCell>
                  <TableCell align="center" className="item">
                    {Math.floor(element.sale * 100) / 100}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="background"></div>
        </TableContainer>
      </StyledCurrency>
    </>
  );
}

export default Currency;
