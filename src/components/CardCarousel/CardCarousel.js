import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LinesEllipsis from "react-lines-ellipsis";

function CardCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div style={{ overflow: "hidden", marginY: "10px" }}>
            <h2>Card Carousel</h2>
            <div style={{ margin: "0 -15px" }}>
                <Slider {...settings}>
                    <div></div>
                    <div>
                        <h3>Card 2</h3>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </div>
                    <div>
                        <h3>Card 3</h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                    </div>
                    <div>
                        <h3>Card 4</h3>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                    </div>
                    <div>
                        <h3>Card 5</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <h3>Card 6</h3>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </div>
                    <div>
                        <h3>Card 7</h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                    </div>
                    <div>
                        <h3>Card 8</h3>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default CardCarousel;
