import React from 'react';

const Header = (props) => (
  <div className="header">
  
    <h1 className="logo">MMA Vault</h1>
    <input type="checkbox" id="nav-toggle" className="nav-toggle" />
    <nav>
      <ul>
        <li><a href="#">Events</a></li>
        <li><a href="#">Fighters</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <label htmlFor="nav-toggle" className="nav-toggle-label">
      <span></span>
    </label>
    
  </div>
);

// Header.defaultProps = {
//   title: 'MMA Vault'
// };

export default Header;

{/* <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div> */}