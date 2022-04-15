import React from 'react';
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
import * as Loader from 'react-loader-spinner';

function Currency() {
  const [currency, setCurrency] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetch = async () => {
    setLoading(true);
    try {
      const data = await fetchData();
      setCurrency([...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <StyledCurrency>
        {isLoading ? (
          <div className="spinner-container">
            <Loader.BallTriangle color="#4a56e2" height={80} width={80} />
          </div>
        ) : (
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
        )}
      </StyledCurrency>
    </>
  );
}

export default Currency;
