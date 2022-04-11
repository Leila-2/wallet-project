import StyledTableBalansMobail from './StyledTableBalansMobail';

export default function TableBalansMobail() {
  return (
    <StyledTableBalansMobail>
      <table className="global-table-mob">
        <tr>
          <th className="table-title-mob">Дата</th>
          <td className="table-date-mob">Ячейка 1</td>
        </tr>
        <tr>
          <th className="table-title-mob">Тип</th>
          <td className="table-date-mob">Ячейка 1</td>
        </tr>
        <tr className="table-string-mob">
          <th className="table-title-mob">Категория</th>
          <td className="table-date-mob">Ячейка 1</td>
        </tr>
        <tr>
          <th className="table-title-mob">Комментарий</th>
          <td className="table-date-mob">Ячейка 1</td>
        </tr>
        <tr>
          <th className="table-title-mob">Сумма</th>
          <td className="table-date-mob">Ячейка 1</td>
        </tr>
      </table>
    </StyledTableBalansMobail>
  );
}
