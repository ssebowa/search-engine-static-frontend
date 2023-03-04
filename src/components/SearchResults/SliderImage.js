import React from "react";

const SliderImage = ({ string }) => {
    console.log(string);

    return (
        <div className="text-center d-flex justify-content-center justyfy-items-center " style={{ marginTop: "20px" }}>
            <img style={{ width: "230px", height: "230px", marginBottom: "40px" }} src={string} alt="" />
        </div>
    );
};

export default SliderImage;
