import React, { useState, useEffect } from 'react';
import Api_data from "./api_data.jsx";
import Slider from "./slider.jsx"
function Apii(props) {
    const api_key = "a80fedfd249354f05ca43f031929e27d";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + props.lat + "&lon=" + props.long + "&appid=" + api_key;
    const city = "http://api.openweathermap.org/data/2.5/group?id=1264527,1275339,1279233,1275004,1261481,1269920,1269321,1271631,1253993&units=metric&appid=a80fedfd249354f05ca43f031929e27d";
    const [posts, setPosts] = useState([]);
    const [cities, setcities] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
        fetch(city)
            .then((res) => res.json())
            .then((data) => {
                setcities(data);
                console.log(cities);
            })
            .catch((err) => {
                console.log(err.message);
            });

    }
        , []);





    return Object.keys(posts).length > 0 ? (
        <div>

            <Api_data objectss={posts} />
            <Slider object={cities} />

        </div>
    ) : (
        <div>
            <h1>taking data</h1>
        </div>
    )

}
export default Apii;