import "./Login.css";
import DecoratedBlock from "../../Components/DecoratedBlock/DecoratedBlock";

const Login = () => {
  return (
    <DecoratedBlock>
      <h1 className="login-h1">
        <img
          className="login-logo"
          src="/assets/img/logo.png"
          alt="logo orion"
        />
      </h1>
      <h2 className="login-txt">login</h2>
      <form className="login-form">
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button className="login-btn" onClick={(e) => e.preventDefault()}>
          Entrar
        </button>
      </form>
    </DecoratedBlock>
  );
};

export default Login;
