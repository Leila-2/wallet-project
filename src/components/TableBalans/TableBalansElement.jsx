import Media from 'react-media';
import TableBalans from './Table/TableBalans';
import TableBalansMobail from './Table/TableBalansMobail';

export default function TableBalansElement() {
  return (
    <>
      <Media queries={{
          small: "(max-width: 767.9px)",
          medium: "(min-width: 768px)"
      }}>
        {matches => (
            <>
              {matches.small && <TableBalansMobail/>}
              {matches.medium && <TableBalans/>}
            </>
          )}
        </Media>
    </>
    
  );
}