import logo from "../images/logo.svg";
import './Header.css'

const Header = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar-brand" />

      <ul className="navbar-nav flex-row">
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            Team
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            Sign In
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
