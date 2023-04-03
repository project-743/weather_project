import React from 'react';
import './api_data_style.css';
function Api_data() {
    var today = new Date();

    return (
        <div className='main'>
            <div className='first'>
                <p>Current Weather</p>
                <p className='date'>{today.toUTCString()}</p>
                <hr></hr>
            </div>
        </div>
    );
}
export default Api_data;
