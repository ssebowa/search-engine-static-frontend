import React from "react";


import './videobackgroundsection.css'


function VideoBackgroundSection() {
    return (
        <div className="video-background " >
            <video autoPlay loop muted>
                <source src="./videos/background.mp4" type="video/mp4" />
            </video>
            <div className="content"></div>
        </div>
    );
}

export default VideoBackgroundSection;
