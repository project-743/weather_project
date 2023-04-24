import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import './map_style.css';

import L from 'leaflet';

const myIcon = new L.Icon({
    iconUrl: 'https://www.svgrepo.com/show/127575/location-sign.svg',
    iconRetinaUrl: 'https://www.svgrepo.com/show/127575/location-sign.svg',
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
});

function map(props) {

    return (
        <div>
            <MapContainer center={[props.lat, props.long]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[props.lat, props.long]} icon={myIcon}>
                    {/* <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup> */}
                </Marker>
            </MapContainer>
        </div>
    );
}
export default map;