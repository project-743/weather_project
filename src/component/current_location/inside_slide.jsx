import React from "react";
import "./slider.css";

function inside_slide(props) {
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
                <button className="card__btn">View More</button>
            </div>
        </div>
    );
}
export default inside_slide;