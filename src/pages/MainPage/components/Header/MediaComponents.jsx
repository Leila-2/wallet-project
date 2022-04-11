import { ReactComponent as Logo } from './icons/Group.svg';
import { ReactComponent as Exit } from './icons/exit 1.svg';
import { ReactComponent as Slash } from './icons/Vector 4.svg';
import { Link } from 'react-router-dom';

export const RenderMobile = ({ m, setM }) => {
  return (
    <div className="containerMobil">
      <Link to="/" className="flexGroops">
        <Logo className="logo" />
        <h1 className="title">Wallet</h1>
      </Link>
      <div className="flexGroops">
        <button className="avatar"></button>
        <p className="headerButton name">Имя</p>
        <button
          className="headerButton exitIconMobil flexGroops"
          onClick={() => {
            setM(!m);
          }}
        >
          <Exit />
        </button>
      </div>
    </div>
  );
};

export const render = ({ m, setM }) => {
  return (
    <div className="containerTablet">
      <Link to="/" className="flexGroops">
        <Logo className="logoTablet" />
        <h1 className="titleTablet">Wallet</h1>
      </Link>
      <div className="flexGroops">
        <div className="avatar"></div>
        <p className="headerButton name">Имя</p>
        <Slash className="slash" />
        <button
          className="headerButton exitIcon flexGroops"
          onClick={() => {
            setM(!m);
          }}
        >
          <Exit />
          <p className="exit hidden">Выход</p>
        </button>
      </div>
    </div>
  );
};
