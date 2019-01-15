import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = props => (
  <div className="header">
    <h1 className="logo">MMA Vault</h1>
    <input type="checkbox" id="nav-toggle" className="nav-toggle" />
    <nav>
      <ul>
        <li>
          <Link to="/events">
            <a href="#">Events</a>
          </Link>
        </li>
        <li>
          <Link to="/fighters">
            <a href="#">Fighters</a>
          </Link>
        </li>
        <li>
          <a href="#">Rankings</a>
        </li>
        {/* <NavLink classname="li" to="/events">
          Events
        </NavLink>
        <NavLink classname="li" to="/">
          Fighters
        </NavLink>
        <NavLink classname="li" to="/rankings">
          Rankings
        </NavLink> */}
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
