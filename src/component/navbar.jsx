import React from "react";

function navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Weather_icon</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#footer">about_us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#pricing">contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#cta">search</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default navbar;