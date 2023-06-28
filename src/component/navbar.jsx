import React from "react";
import { useState, useEffect, useContext } from 'react';
import './navbar.css';
import { UserContext } from './current_location/SampleContexts.js';
import Image from './logo_page-0001-removebg-preview.png'
import { Apii, x } from './current_location/api_request';
let typed = 1;

function Navbar() {
    const { value, setValue } = useContext(UserContext);
    const handleClick = async () => {

        const api_key = "a80fedfd249354f05ca43f031929e27d"
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + typed + "&appid=" + api_key;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();
            setValue(result)

        } catch (err) {
            console.log(err.message);
        } finally {

        }
    };
    // let Handle = () => {

    //     useEffect(() => {
    //         fetch(url)
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 setValue(data);
    //             })
    //             .catch((err) => {
    //                 console.log(err.message);
    //             });
    //     }
    //         , []);
    // }

    return (
        <section id="title">
            <div class="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                    <img className="nav_bar_image" src={Image} alt="logo"></img>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item ">
                                <a onClick={() => setValue(x)} className="nav-link" href="#contact">Current</a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link" href="#aboutus">About Us</a>
                            </li>
                            <li className="nav-item ">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="input-group mb-3 form w-25">
                        <input type="text" onChange={(e) => typed = e.target.value} className="form-control" placeholder="Enter City" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <a href="#component" className="btn btn-secondary btn-md" type="button" onClick={handleClick}>Search</a>
                        </div>
                    </div>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        </section>

    );
}
export default Navbar;