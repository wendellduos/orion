import "./Header.css";

const Header = () => {
  const handleBurgerMenu = () => {
    // create logic
    console.log("clicked on burger-menu");
  };

  return (
    <header>
      <img src="./assets/img/logo.png" alt="logo orion" />
      <button
        className="dropdown-toggle-btn"
        type="button"
        onClick={handleBurgerMenu}
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
  );
};

export default Header;
