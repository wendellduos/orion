import "./Home.css";
import Header from "../../Components/Header/Header";
import DecoratedBlock from "../../Components/DecoratedBlock/DecoratedBlock";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useState } from "react";

const Home = () => {
  const [mapState, setMapState] = useState(null);
  const [speedHistory, setSpeedHistory] = useState([]);
  const [latestCoords, setLatestCoords] = useState({
    lat: -26.301581,
    lng: -48.846323,
  });

  const handleInsertSpeedPoint = (speed) => {
    let newArray;

    if (speedHistory.length < 6) {
      newArray = [...speedHistory, speed];
    } else {
      newArray = [...speedHistory.slice(1), speed];
    }

    setSpeedHistory(newArray);
  };

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
                  left: `${index * 19.9}%`,
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
        <br />
        <br />
        <h3 className="mini-title">Última localização</h3>
        <div className="preview-map-wrp">
          <MapContainer
            center={[latestCoords.lat, latestCoords.lng]}
            zoom={16}
            ref={mapState}
            touchZoom={false}
            scrollWheelZoom={false}
            zoomControl={false}
            dragging={false}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <TileLayer
              attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy;JawgMaps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tile.jawg.io/jawg-lagoon/{z}/{x}/{y}{r}.png?access-token=X0Pc7SpgNT4B4xu7nQMaXHYusv0CrKZSwG0KBCJH7zNkg6rz4i30t4dzoNMa4Ajd"
            />
          </MapContainer>
        </div>
        <a
          className="open-on-gmaps"
          href={`https://www.google.com.br/maps/@${latestCoords.lat},${latestCoords.lng},16z?entry=ttu`}
          target="_blank"
          rel="noreferrer"
        >
          Ver localização no Google Maps
        </a>
      </DecoratedBlock>
    </>
  );
};

export default Home;
