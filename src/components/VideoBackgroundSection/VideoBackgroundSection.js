import React from "react";


import './videobackgroundsection.css'


function VideoBackgroundSection() {
    return (
        <div className="video-background">
            <video autoPlay loop muted playsInline>
                <source
                    src="https://res.cloudinary.com/dicgvondb/video/upload/c_fit,h_900,w_1600/v1674669096/ssebowa/ssebowa.org/search-engine-static-frontend/videos/background_rooewt.mp4"
                    type="video/mp4"
                />
            </video>
            <div className="content"></div>
        </div>
    );
}

export default VideoBackgroundSection;
