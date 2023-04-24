import React from "react";
import './navbar.css';
function navbar() {
    return (
        <section id="title">
            <div class="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                    <img className="nav_bar_image" src="https://camo.githubusercontent.com/fb8b72757a602dbcee0e2fe2a3c7db9f4963be0f2739bb9fe84ca598edbd5266/68747470733a2f2f6272616e64732e686f6d652d617373697374616e742e696f2f5f2f6f70656e776561746865726d61702f6c6f676f2e706e67" alt="logo"></img>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a class="nav-link" href="#aboutus">About Us</a>
                            </li>
                            <li className="nav-item ">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link" href="#search">Search</a>
                            </li>
                        </ul>
                    </div>
                    <div className="input-group mb-3 form w-25">
                        <input type="text" className="form-control" placeholder="Enter City" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-secondary btn-md" type="button">Search</button>
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
export default navbar;