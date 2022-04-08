import React from 'react';
import s from './Loader.module.css';
import { Container } from '../../styles/Container';

function Loader() {
  return (
    <Container>
      <div className={s.loader}></div>
    </Container>
  );
}

export default Loader;
