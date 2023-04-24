import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import './map_style.css';

import L from 'leaflet';

const myIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconRetinaUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    popupAnchor: [-0, -0],
    iconSize: [32, 37],
});

function Map(props) {

    return (
        <div className='map-container'>
            <MapContainer center={[props.lat, props.long]} zoom={16.9} scrollWheelZoom={true}>
                {/* <TileLayer
                    attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                /> */}
                <TileLayer
                    attribution= '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=I81h88vKmoFykBTNTEqfOU6aqcPxey2eosOu5IerEKEX1stTMH2di90hPpwIs5ro"
                />
                <Marker position={[props.lat, props.long]} icon={myIcon}>
                    <Popup>
                        <h6>{props.place}</h6>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
export default Map;