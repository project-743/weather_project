import React, { useContext } from "react";
import { useGeolocated } from "react-geolocated";
import { Apii, x } from "./api_request.jsx";
import { UserContext } from "./SampleContexts.js";
function Demo() {
    const msg = useContext(UserContext);
    console.log(msg);
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