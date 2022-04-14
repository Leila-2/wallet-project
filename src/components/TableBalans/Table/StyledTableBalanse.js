import styled from 'styled-components';
import { baseTheme } from '../../../styles/variables';

const StyledTableBalans = styled.div`
text-align:left;
table{
  letter-spacing: -0.04em;
}
.amount, .balance{
  text-align:right;
  width:110px;
}

tr{
  height:55px;
  width:30px;
}
td{
 padding:0 20px;
}
th{
  width:40px;
  padding:0 20px;
  text-align:center;
}
.table-date{
  /* padding-left:20px; */
}
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
    font-family: ${baseTheme.fonts.titleFont};
    letter-spacing: -0.04em;
    background: #ffffff;
  }

  .first-table {
    text-align: left;
    /* padding-left: 25px;
    padding-top: 15px;
    padding-bottom: 15px; */
    border-radius: 30px 0 0 30px;
  }

  .last-table {
    /* padding-right:15px; */
    border-radius: 0 30px 30px 0;
  }

  .table-list {
    /* text-align: center; */
  }

  .table-title{
    text-align: left;
    /* padding-left: 25px; */
  }

  .title-type{
    /* padding-left: 22px;
    padding-right: 22px; */
    text-align:center;
  }

  .sum-title{
    /* padding-right: 22px; */
  }

  .table-list:not(:last-child){
    border-bottom: 1px solid #dcdcdf;
    border-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }

  .table-list td {
    /* height: 55px; */
  }
`;

export default StyledTableBalans;
