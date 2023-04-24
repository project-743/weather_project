import React, { useState } from 'react';
import './api_data_style.css';
import Map from './map.jsx'
function Api_data(props) {

    var currentdate = new Date();

    const [datetime, setdatetime] = useState(currentdate.getHours() + ":"
        + currentdate.getMinutes());
    function time() {
        setdatetime(currentdate.getHours() + ":"
            + currentdate.getMinutes());
    }
    setInterval(time, 1000);
    var image_url = "https://openweathermap.org/img/wn/" + props.objectss.weather[0].icon + "@2x.png";

    return (

        <div className='main'>
            <div className='first'>
                <div className='part_1'>
                    <p>{props.objectss.name}</p>
                    <p className='date' >{datetime}</p>
                    <hr></hr>
                </div>
                <div className='part_2'>
                    <div className='part1_part2'>
                        <img src={image_url}></img>
                        <p className="temp"><b>{Math.round((props.objectss.main.temp - 273.15))}°c</b></p>
                        <p style={{ display: 'block', paddingBottom: '7px' }} >{props.objectss.weather[0].description}</p>

                    </div>
                    <div className='part2_part2'>

                        <p style={{ display: 'block', paddingBottom: '13px' }}> RealFeel® {Math.round((props.objectss.main.feels_like - 273.15))}°</p>
                        <p style={{ display: 'block', paddingBottom: '13px' }}>longitude {props.objectss.coord.lon}</p>
                        <p style={{ display: 'block', paddingBottom: '13px' }}>lattitude  {props.objectss.coord.lat}</p>
                    </div>
                    <hr></hr>
                </div>
                <div className='part_3'>
                    <div className='part1_part3'>
                        <div className='content'>
                            <p >humidity</p>
                            <p style={{ alignItems: 'right', position: 'absolute', right: '0px' }}>{props.objectss.main.humidity}%</p>
                        </div>
                        <hr></hr>
                        <div className='content'>
                            <p >cloudiness</p>
                            <p style={{ alignItems: 'right', position: 'absolute', right: '0px' }}>{props.objectss.clouds.all}%</p>
                        </div>
                        <hr></hr>
                        <div className='content'>
                            <p >Wind speed</p>
                            <p style={{ alignItems: 'right', position: 'absolute', right: '0px' }}>{Math.round(props.objectss.wind.speed * 1000 * 100 / 3600) / 100}Km/hr </p>
                        </div>
                        <hr></hr>
                    </div>
                    <div className='part2_part3'>
                        <div className='content'>
                            <p >Pressure</p>
                            <p style={{ alignItems: 'right', position: 'absolute', right: '0px' }}>{props.objectss.main.pressure}hPa  </p>
                        </div>
                        <hr></hr>
                        <div className='content'>
                            <p >temp_min</p>
                            <p style={{ alignItems: 'right', position: 'absolute', right: '0px' }}>{Math.round((props.objectss.main.temp_min - 273.15))}°</p>
                        </div>
                        <hr></hr>
                        <div className='content'>
                            <p >temp_max</p>
                            <p style={{ alignItems: 'right', position: 'absolute', right: '0px' }}>{Math.round((props.objectss.main.temp_max - 273.15))}°</p>
                        </div>
                        <hr></hr>
                    </div>
                </div>
            </div>
            <div className='second'>
                <Map lat={props.objectss.coord.lat} long={props.objectss.coord.lon} place={props.objectss.name} />
            </div>
        </div>

    );
}
export default Api_data;
