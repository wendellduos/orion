import "./Home.css";
import Header from "../../Components/Header/Header";
import DecoratedBlock from "../../Components/DecoratedBlock/DecoratedBlock";

const Home = () => {
  const speedHistory = [0, 39, 31, 100, 63, 57];

  return (
    <>
      <Header />
      <DecoratedBlock>
        <h2 className="title">Visão Geral</h2>
        <h3 className="mini-title">Histórico de velocidade</h3>
        <div id="speed-timeline">
          <div id="speed-labels">
            <small>VELOCIDADE</small>
          </div>
          <div id="time-labels">
            <small>TEMPO</small>
          </div>
          {speedHistory.map((speed, index) => {
            return (
              <div
                className="speed-point"
                key={index}
                style={{
                  left: `${index * 19.7}%`,
                  height: `${speed}%`,
                }}
              >
                <img
                  src="/assets/img/dot-marker.png"
                  alt="icone de marcação da velocidade"
                />
                <div className="speed-tooltip">{speed}</div>
              </div>
            );
          })}
        </div>
      </DecoratedBlock>
    </>
  );
};

export default Home;
