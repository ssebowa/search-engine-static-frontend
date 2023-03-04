import React from "react";
import PropTypes from "prop-types";

function InfoBoxes({ data }) {
    return (
        <div className="InfoBoxMain">
            <a
                href={data.id}
                className="text-success fw-bold mt-2 mb-3 w-100"
                style={{ fontSize: 20 }}
            >
                {data.infobox}
            </a>
            <div className="InfoBoxMainInfoMainOuter">
                <img
                    className="InfoBoxMainImageMain img-fluid"
                    src={data.img_src}
                    alt={""}
                />
                <p className="InfoBoxContent">{data.content}</p>
            </div>

            <div className="hide-700">
                {data?.urls?.map((item, i) => {
                    return (
                        <a key={i} href={item.url} className="InfoBoxLinks">
                            {item.title}
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default InfoBoxes;
InfoBoxes.propTypes = {
    data: PropTypes.object,
};
