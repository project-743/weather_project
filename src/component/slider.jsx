import React from "react";
import "./slider.css"

import Swiper from "swiper";

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

function Slider(){
    return (
        <section className="swiper mySwiper">
            <div className="swiper-wrapper">
                <div className="card swiper-slide">
                    <div className="card__image">
                    <img src="https://th.bing.com/th/id/R.770b805d5c99c7931366c2e84e88f251?rik=khgO%2bY1Hh3BT9w&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-weather-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596142qx4ep.png&ehk=6msbAydV7X6D4bO8zvLC664aXwKOdBU17dwrHcKxaAg%3d&risl=&pid=ImgRaw&r=0" alt="card image" />
                    </div>
                    <div className="card__content">
                    <span className="card__title">Chennai</span>
                    <span className="card__name">Tamil Nadu</span>
                    <p className="card__text">Celcius</p>
                    <button className="card__btn">View More</button>
                    </div>
                </div>
                <div className="card swiper-slide">
                    <div className="card__image">
                    <img src="https://th.bing.com/th/id/R.770b805d5c99c7931366c2e84e88f251?rik=khgO%2bY1Hh3BT9w&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-weather-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596142qx4ep.png&ehk=6msbAydV7X6D4bO8zvLC664aXwKOdBU17dwrHcKxaAg%3d&risl=&pid=ImgRaw&r=0" alt="card image" />
                    </div>
                    <div className="card__content">
                    <span className="card__title">Chennai</span>
                    <span className="card__name">Tamil Nadu</span>
                    <p className="card__text">Celcius</p>
                    <button className="card__btn">View More</button>
                    </div>
                </div>
                <div className="card swiper-slide">
                    <div className="card__image">
                    <img src="https://th.bing.com/th/id/R.770b805d5c99c7931366c2e84e88f251?rik=khgO%2bY1Hh3BT9w&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-weather-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596142qx4ep.png&ehk=6msbAydV7X6D4bO8zvLC664aXwKOdBU17dwrHcKxaAg%3d&risl=&pid=ImgRaw&r=0" alt="card image" />
                    </div>
                    <div className="card__content">
                    <span className="card__title">Chennai</span>
                    <span className="card__name">Tamil Nadu</span>
                    <p className="card__text">Celcius</p>
                    <button className="card__btn">View More</button>
                    </div>
                </div>
                <div className="card swiper-slide">
                    <div className="card__image">
                    <img src="https://th.bing.com/th/id/R.770b805d5c99c7931366c2e84e88f251?rik=khgO%2bY1Hh3BT9w&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-weather-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596142qx4ep.png&ehk=6msbAydV7X6D4bO8zvLC664aXwKOdBU17dwrHcKxaAg%3d&risl=&pid=ImgRaw&r=0" alt="card image" />
                    </div>
                    <div className="card__content">
                    <span className="card__title">Chennai</span>
                    <span className="card__name">Tamil Nadu</span>
                    <p className="card__text">Celcius</p>
                    <button className="card__btn">View More</button>
                    </div>
                </div>
            </div>
      </section>
    );
}

export default Slider;