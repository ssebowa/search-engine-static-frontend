import React from "react";

import "./videobackgroundsection.css";
import vvideo from "../../assets/video/plant.mp4";
function VideoBackgroundSection() {
    return (
        <div className="video-background" style={{ height: "90vh" }}>
            <video autoPlay loop muted playsInline>
                <source src={vvideo} type="video/mp4" />
            </video>
            <div className="content"></div>
        </div>
    );
}

export default VideoBackgroundSection;
// "https://res.cloudinary.com/dicgvondb/video/upload/c_fit,h_900,w_1600/v1674669096/ssebowa/ssebowa.org/search-engine-static-frontend/videos/background_rooewt.mp4";
