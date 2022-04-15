import styled from 'styled-components';
import { baseTheme } from '../../styles/variables';

const colors = [
  '#FED057',
  '#F7A594',
  '#FCBEB1',
  '#C5BAFF',
  '#6E78E8',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',
];

const borderColor = function (colors) {
  for (let i = 1; i < colors.length; i += 1) {
    return colors[i];
  }
};

const color = borderColor(colors);

const StyledTableStatistic = styled.div`
  .global-table {
    border-collapse: collapse;
    min-width: 395px;
    min-height: 606px;
    margin-left: auto;
    margin-right: 0;
    left: 869px;
    top: 247px;
    margin-top: 20px;

    @media screen and (min-width: 768px) and (max-width: 1199.9px) {
      margin-right: auto;
      min-width: 336px;
      min-height: 596px;
      left: 400px;
      top: 404px;
    }
    @media screen and (min-width: 320px) and (max-width: 767px) {
      margin-right: auto;
      min-width: 280px;
      min-height: 604px;
      left: 20px;
      top: 661px;
    }
  }

  .header-table {
    font-family: ${baseTheme.fonts.titleFont};
    height: 58px;
    background: #ffffff;
  }

  .table-categori {
    padding-left: 16px;
    border-bottom: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }

  .first-table {
    text-align: left;
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 30px 0 0 30px;
  }

  .last-table {
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 15px;
    border-radius: 0 30px 30px 0;
  }

  .table-list .table-data {
    padding-right: 20px;
    text-align: right;
    border-bottom: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }

  .last-data {
    padding-right: 20px;
    text-align: right;
  }

  .square {
    display: inline-block;
    margin-right: 15px;
    margin-bottom: -8px;
    background: ${color};
    width: 24px;
    height: 24px;
  }

  .table-list .table-title {
    text-align: left;
    padding-left: 15px;
  }
  .income {
    color: ${baseTheme.colors.green};
    font-weight: 600;
  }
  .expenses {
    color: ${baseTheme.colors.red};
    font-weight: 600;
  }
`;

export default StyledTableStatistic;
