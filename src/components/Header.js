import React from 'react';
import './Header.css';
import { useStateValue } from '../context/StateProvider';
import Timer from './Timer';

const Header = () => {
  const [{ totalBombs, flagCount }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__difficulty">Medium</div>
      <div className="header__flags">
        Flags : {totalBombs - flagCount}
        <span role="img" aria-label="flag">
          🚩
        </span>
      </div>
      <div className="header__timer">
        <Timer />
      </div>
      <div className="header__social">Share</div>
    </div>
  );
};

export default Header;
