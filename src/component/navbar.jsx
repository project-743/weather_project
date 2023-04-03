import React from "react";
import './navbar.css';
function navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">

            <img className="nav_bar_image" src="https://camo.githubusercontent.com/fb8b72757a602dbcee0e2fe2a3c7db9f4963be0f2739bb9fe84ca598edbd5266/68747470733a2f2f6272616e64732e686f6d652d617373697374616e742e696f2f5f2f6f70656e776561746865726d61702f6c6f676f2e706e67" alt="logo"></img>
            <div className="input-group mb-3 form">
                <input type="text" className="form-control" placeholder="search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-secondary btn-md" type="button">Click</button>
                </div>
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item ">
                        <a className="nav-link nav_bar_img" href="#About"><button type="button" className="btn btn-outline-secondary about_us">About</button></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav_bar_img" href="#Contact"><button type="button" className="btn btn-outline-secondary">Contact</button></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav_bar_img" href="#Search"><button type="button" className="btn btn-outline-secondary">Search</button></a>
                    </li>
                </ul>
            </div>
            
        </nav >
    );
}
export default navbar;