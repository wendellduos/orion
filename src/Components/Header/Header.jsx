import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <header>
        <img src="./assets/img/logo.png" alt="logo orion" />
        <button
          className="dropdown-toggle-btn"
          type="button"
          onClick={() => handleDropdown()}
        >
          <img
            className="user-icon"
            src="/assets/icons/user.svg"
            alt="icone de usuário"
          />
          <img
            className="burger-menu-icon"
            src="/assets/icons/menu-burger.svg"
            alt="icone de burger-menu"
          />
        </button>
      </header>
      {showDropdown && (
        <>
          <div className="dropdown">
            <h2 className="dd-username">username</h2>
            <p>Páginas</p>
            <Link className="dd-link" to="/">
              <img
                src="/assets/icons/house-chimney.svg"
                alt="icone da página"
              />
              Home
            </Link>
            <Link className="dd-link" to="/broadcast">
              <img src="/assets/icons/broadcast.svg" alt="icone da página" />
              Broadcast
            </Link>
            <p>Conta</p>
            <Link className="dd-link" to="/settings">
              <img
                src="/assets/icons/settings-sliders.svg"
                alt="icone da página"
              />
              Configurações
            </Link>
            <Link className="dd-link" to="/login">
              <img src="/assets/icons/exit.svg" alt="icone da página" />
              Sair
            </Link>
            <a
              className="dd-credits"
              href="https://mysadlittlegarden.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              mysadlittlegarden
            </a>
          </div>
          <div className="dd-toggle" onClick={() => handleDropdown()}></div>
        </>
      )}
    </>
  );
};

export default Header;
