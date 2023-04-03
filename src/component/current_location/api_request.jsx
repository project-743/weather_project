import React, { useState, useEffect } from 'react';

function Apii(props) {
    const api_key = "a80fedfd249354f05ca43f031929e27d";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + props.lat + "&lon=" + props.long + "&appid=" + api_key;
    console.log(url);
    const [posts, setPosts] = useState([]);

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

    return (
        <div>
            <h1>Received</h1>
        </div>
    );
}
export default Apii;