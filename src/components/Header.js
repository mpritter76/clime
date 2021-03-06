import React from 'react';

function Header(props) {
  const { cityName } = props;

  if (!cityName) {
    return (
      <div className="header">
        <div className="title">Clime</div>
        <div className="credit">
          <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
        </div>
      </div>
    );
  }
}

export default Header;
