import { ReactComponent as Logo } from './icons/Group.svg';
import { ReactComponent as Exit } from './icons/exit 1.svg';
import { ReactComponent as Slash } from './icons/Vector 4.svg';
import { Link } from 'react-router-dom';

export const RenderMobile = ({ m, setM, name, avatar}) => {
  return (
    <div className="containerMobil">
      {/* <Link to="/" className="flexGroops">
        <Logo className="logo" />
        <h1 className="title">Wallet</h1>
      </Link> */}
      <a href='' className="flexGroops">
        <Logo className="logo" />
        <h1 className="title">Wallet</h1>
      </a>
      <div className="flexGroops">
        <p className="headerButton name">{name }</p>
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

export const render = ({ m, setM , name, avatar}) => {
  return (
    <div className="containerTablet">
      {/* <Link to="/" className="flexGroops">
        <Logo className="logoTablet" />
        <h1 className="titleTablet">Wallet</h1>
      </Link> */}
      <a href='' className="flexGroops">
        <Logo className="logoTablet" />
        <h1 className="titleTablet">Wallet</h1>
      </a>
      <div className="flexGroops">
        <img className="avatar" alt='avatar' src={avatar} />
        <p className="headerButton name">{name }</p>
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
