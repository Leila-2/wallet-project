import { ReactComponent as Logo } from './icons/Group.svg';
import { ReactComponent as Exit } from './icons/exit 1.svg';
import { ReactComponent as Slash } from './icons/Vector 4.svg';
import { Link } from 'react-router-dom';

export const renderMobile = () => {
  return (
    <div className='containerMobil'>
      <Link to="/" className="flexGroops">
        <Logo className="logo" />
        <h1 className="title">Wallet</h1>
      </Link>
      <div className="flexGroops">
        <button className="avatar"></button>
        <p className="headerButton name">Имя</p>
        <button
          className="headerButton exitIconMobil flexGroops"
          onClick={() => console.log('exit')}
        >
          <Exit />
        </button>
      </div>
    </div>
  );
};

export const render = () => {
  return (
    <div className='containerTablet'>
      <Link to="/" className="flexGroops">
        <Logo className="logoTablet" />
        <h1 className="titleTablet">Wallet</h1>
      </Link>
      <div className="flexGroops">
        <button className="avatar"></button>
        <p className="headerButton name">Имя</p>
        <Slash className="slash" />
        <button
          className="headerButton exitIcon flexGroops"
          onClick={() => console.log('exit')}
        >
          <Exit />
          <p className="exit hidden">Выход</p>
        </button>
      </div>
    </div>
  );
};