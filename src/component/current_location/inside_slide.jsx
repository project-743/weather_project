import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from "./SampleContexts.js";

function Inside_slide(props) {
    const { value, setValue } = useContext(UserContext);
    var image_url = "https://openweathermap.org/img/wn/" + props.objects.weather[0].icon + "@2x.png";
    return (
        <div className="card swiper-slide">
            <div className="card__image">
                <img src={image_url} alt="card image" />
            </div>
            <div className="card__content">
                <span className="card__title">{props.objects.name}</span>
                <span className="card__name">{props.objects.weather[0].description}</span>
                <p className="card__text">{props.objects.main.temp}C</p>
                <a href="#component" onClick={() => setValue(props.objects)} className="card__btn">View More</a>
            </div>
        </div>
    );
}
export default Inside_slide;