import React from "react";

function index({ data }) {
    return (
        <>
            <h5 className="h5">{data.title}</h5>
            <p
                className="px-3"
                dangerouslySetInnerHTML={{ __html: data.description }}
            ></p>
        </>
    );
}

export default index;
