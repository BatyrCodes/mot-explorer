import "./Header.scss";
function Header() {
  return (
    <header className="header">
      <h1 className="header__title">MOT Explorer</h1>
      <ul className="header__nav">
        <li className="header__nav-item">
          <a href="#" className="header__nav-link">
            Check a vehicle
          </a>
          <a href="#" className="header__nav-link">
            Saved vehicles
          </a>
          <a href="#" className="header__nav-link">
            About
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
