import "./Home.css";
import Header from "../../Components/Header/Header";
import DecoratedBlock from "../../Components/DecoratedBlock/DecoratedBlock";

const Home = () => {
  const speedHistory = [0, 10, 20, 30, 60];

  return (
    <>
      <Header />
      <DecoratedBlock>
        <h2 className="title">Visão Geral</h2>
        <h3 className="mini-title">Histórico de velocidade</h3>
        <div id="speed-timeline">
          <div id="speed-labels">
            <small>100km/h</small>
            <small>0km/h</small>
          </div>
          <div id="time-labels">
            <small>TEMPO</small>
          </div>
          {speedHistory.map((speed) => {
            return (
              <div className="speed-point" style={{ bottom: `${speed}%` }}>
                .
              </div>
            );
          })}
        </div>
      </DecoratedBlock>
    </>
  );
};

export default Home;
