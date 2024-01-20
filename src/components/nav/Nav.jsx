import { NavLink } from "react-router-dom";

import "../../components/nav/Nav.css";
import ButtonMode from "../ButtonMode/ButtonMode";

const Nav = () => {

    const linkActive = 'nav-list__link, nav-list__link--active';
    const linkDefault = 'nav-list__link';

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Freelancer</strong> portfolio
          </NavLink>

          <ButtonMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className={({isActive}) => isActive ? linkActive : linkDefault}>
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/projects" className={({isActive}) => isActive ? linkActive : linkDefault}>
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/contacts" className={({isActive}) => isActive ? linkActive : linkDefault}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
