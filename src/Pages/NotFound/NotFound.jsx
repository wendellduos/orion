import "./NotFound.css";
import Header from "../../Components/Header/Header";

const NotFound = () => {
  return (
    <>
      <Header currentPage={"not-found"} />
      <main className="NotFound-main">
        <h2 className="monospace bold emoticon">(╥﹏╥)</h2>
        <p className="monospace">
          <span className="bold">404</span> - Página não encontrada.
        </p>
      </main>
    </>
  );
};

export default NotFound;
