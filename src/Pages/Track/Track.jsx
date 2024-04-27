import "./Track.css";
import Header from "../../Components/Header/Header";
import {
  MapContainer,
  TileLayer,
  useMap,
} from "https://cdn.esm.sh/react-leaflet";
const Track = () => {
  return (
    <>
      <Header currentPage={"track"} />
      <p>this is the track page</p>
    </>
  );
};
export default Track;
