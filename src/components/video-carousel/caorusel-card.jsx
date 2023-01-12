import React from "react";
import Carousel from "react-bootstrap/Carousel";

import ReactPlayer from "react-player/youtube";

function caoruselCard({ data }) {
    return (
        <Carousel.Item key={data.id}>
            <ReactPlayer className="w-50  mx-auto" url={data.video} />
        </Carousel.Item>
    );
}

export default caoruselCard;
