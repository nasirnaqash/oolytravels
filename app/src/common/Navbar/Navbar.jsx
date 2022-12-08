import React from "react";
import { AppConfig as NC } from "../../utils/constants";

const Navbar = ({ hideContactUs }) => {
  return (
    <header className="header" data-header>
      <div className="container">
        <a href="/">
          <h1 className="logo">{NC.title}</h1>
        </a>

        <button
          className="nav-toggle-btn"
          data-nav-toggle-btn
          aria-label="Toggle Menu"
        >
          <ion-icon name="menu-outline" className="open"></ion-icon>
          {/* <ion-icon name="close-outline" className="close"></ion-icon> */}
        </button>

        <nav className="navbar">
          <ul className="navbar-list">
            {NC.navigationLinks.primary.map((item, index) => (
              <li key={index}>
                <a href={item.path} className="navbar-link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          {!hideContactUs && (
            <a href="/enquire" className="btn btn-secondary">
              Contact us
            </a>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
