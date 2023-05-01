
import "./slider.css"

import { register } from 'swiper/element/bundle';
// register Swiper custom elements
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from "./SampleContexts.js";
import Inside_slider from './inside_slide.jsx'
register();
function create_slider(obj) {
    return (
        <swiper-slide>
            <Inside_slider objects={obj} />
        </swiper-slide>
    );
}
function Slider(props) {
    const x = props.object.list;

    return (
        <section className="swiper mySwiper">
            <div className="swiper-wrapper">
                <swiper-container
                    grabCursor="true"
                    loop="true"
                    slides-per-view="3"
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        clickable: true,
                    }}
                >
                    {x.map(create_slider)}
                </swiper-container>
            </div>
        </section>
    );
}

export default Slider;