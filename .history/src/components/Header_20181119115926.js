import React from 'react';

const Header = (props) => (
  <div className="header">
    <h1 className="logo">{props.title}</h1>
    <input type="checkbox" id="nav-toggle" className="nav-toggle" />
    <nav>
      <ul>
        <li><a href="#">{props.subtitle}</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <label htmlFor="nav-toggle" className="nav-toggle-label">
      <span></span>
    </label>
  </div>
);

Header.defaultProps = {
  title: 'MMA Vault'
};

export default Header;