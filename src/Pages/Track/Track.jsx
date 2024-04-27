import "./Track.css";
import Header from "../../Components/Header/Header";
import { MapContainer, Marker, Polyline, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useRef } from "react";
import dotMarkerIcon from "./icons/dot-marker.png";
import locationMarkerIcon from "./icons/marker.png";

const Track = () => {
  const mapRef = useRef(null);
  const tiles =
    "https://tile.jawg.io/jawg-lagoon/{z}/{x}/{y}{r}.png?access-token=X0Pc7SpgNT4B4xu7nQMaXHYusv0CrKZSwG0KBCJH7zNkg6rz4i30t4dzoNMa4Ajd";
  const tempTiles = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
  const cityCenter = {
    lat: -26.304637,
    lng: -48.848693,
  };

  const dotMarker = new L.Icon({
    iconUrl: dotMarkerIcon,
    iconSize: new L.Point(20, 20),
  });

  const locationMarker = new L.Icon({
    iconUrl: locationMarkerIcon,
    iconSize: new L.Point(40, 40),
    iconAnchor: new L.Point(20, 40),
  });

  const path = [
    [-26.339316, -48.841376],
    [-26.335705, -48.841676],
    [-26.331713, -48.841839],
    [-26.326475, -48.842118],
    [-26.323077, -48.842281],
  ];

  return (
    <>
      <Header currentPage={"track"} />
      <main className="Track-main">
        <MapContainer
          center={[cityCenter.lat, cityCenter.lng]}
          zoom={14}
          ref={mapRef}
          style={{
            width: "100%",
            height: "60%",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url={tiles}
          />
          <Polyline
            pathOptions={{ color: "var(--blue-l)", weight: 7 }}
            positions={path}
          />
          {path.map((pos) => {
            return <Marker icon={dotMarker} position={[pos[0], pos[1]]} />;
          })}
          <Marker
            icon={locationMarker}
            position={[path[path.length - 1][0], path[path.length - 1][1]]}
          />
        </MapContainer>
        <div className="details-wrp">
          <div className="details-body"></div>
        </div>
      </main>
    </>
  );
};
export default Track;
