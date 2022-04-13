import styled from 'styled-components';
import { baseTheme } from '../../../styles/variables';

const StyledTableBalansMobail = styled.div`
.global-table-mob{
    border-collapse: collapse;
    min-width: 280px;
    min-height: 282px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:10px;
    border-radius: 10px;
    background: #ffffff;
}

.table-title-mob{
    font-family: ${baseTheme.fonts.titleFont};
    text-align: left;
    padding-left: 15px;
    border-bottom: 1px solid #DCDCDF;
}

.table-date-mob{
    text-align: right;
    padding-right: 20px;
    border-bottom: 1px solid #DCDCDF;
}
`
export default StyledTableBalansMobail;