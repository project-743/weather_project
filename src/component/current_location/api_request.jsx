import React, { useState, useEffect } from 'react';
import Api_data from "./api_data.jsx";
function Apii(props) {
    const api_key = "a80fedfd249354f05ca43f031929e27d";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + props.lat + "&lon=" + props.long + "&appid=" + api_key;
    const forcast = "https://api.openweathermap.org/data/2.5/forecast?lat=" + props.lat + "&lon=" + props.long + "&appid=" + api_key;
    console.log(forcast);
    const [posts, setPosts] = useState([]);
    const [days, setdays] = useState([]);
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
    }, []);



    return Object.keys(posts).length > 0 ? (
        <div>

            <Api_data objectss={posts} />

        </div>
    ) : (
        <div>
            <h1>taking data</h1>
        </div>
    )

}
export default Apii;