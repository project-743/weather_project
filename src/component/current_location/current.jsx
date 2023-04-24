import React from "react";
import { useGeolocated } from "react-geolocated";
import Apii from "./api_request.jsx";
function Demo() {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: true,
            },
            userDecisionTimSeout: 5000,
        });
    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <div>
            <Apii lat={coords.latitude} long={coords.longitude} />
        </div>

    ) : (
        <div>Getting the location data&hellip; </div>
    );
};

export default Demo;