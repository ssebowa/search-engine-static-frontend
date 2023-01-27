import React from "react";


import './videobackgroundsection.css'


function VideoBackgroundSection() {
    return (
        <div className="video-background">
            <video autoPlay loop muted>
                <source src="https://www.youtube.com/watch?v=AjcEQ7cGVOc" type="video/mp4" />
            </video>
            <div className="content"></div>
        </div>
    );
}

export default VideoBackgroundSection;
