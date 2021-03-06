import React from "react";

const Header = props => (
  <div className="header">
    <h1 className="logo">MMA Vault</h1>
    <input type="checkbox" id="nav-toggle" className="nav-toggle" />
    <nav>
      <ul>
        <NavLink to="/events">
          <li>
            <a href="#">Events</a>
          </li>
        </NavLink>
        <li>
          <a href="#">Fighters</a>
        </li>
        <li>
          <a href="#">Rankings</a>
        </li>
        {/* <NavLink to="/events">Events</NavLink>
        <NavLink to="/">Fighters</NavLink>
        <NavLink to="/rankings">Rankings</NavLink> */}
      </ul>
    </nav>
    <label htmlFor="nav-toggle" className="nav-toggle-label">
      <span />
    </label>
  </div>
);

// Header.defaultProps = {
//   title: 'MMA Vault'
// };

export default Header;

{
  /* <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div> */
}
