import styled from 'styled-components';

const StyledTableBalans = styled.div`
  .global-table {
    border-collapse: collapse;
    min-width: 715px;
    min-height: 58px;
    margin-left: auto;
    margin-right: 0;
    left: 549px;
    top: 126px;
    @media screen and (min-width: 767.9px) and (max-width: 1199.9px) {
      margin-right: auto;
      min-width: 704px;
      min-height: 58px;
      left: 32px;
      top: 314px;
    }
  }

  .header-table {
    font-family: 'Open Sans';
    font-size: 16px;
    line-height: 24px;
    background: #ffffff;
  }

  .first-table {
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 30px 0 0 30px;
  }

  .last-table {
    border-radius: 0 30px 30px 0;
  }
  .table-list {
    text-align: center;
    background-color: transpotate;
  }

  .table-list td {
    padding: 10px;
    border-bottom: 1px solid #dcdcdf;
    border-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }
`;

export default StyledTableBalans;
