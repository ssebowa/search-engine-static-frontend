import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { slugify } from "../../utils";

const BlogMainCard = ({ data, classOption }) => {
    return (
        <div className="blog-card">
            <div className={`thumb bg-light text-center ${classOption}`}>
                <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>
                    <img
                        src={data.poster}
                        alt="img"
                        style={{
                            height: "200px",
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />
                </Link>
            </div>
            <div className="blog-content">
                <span className="blog-meta author">{data.creator}</span>
                <span className="separator">-</span>
                <span className="blog-meta date">{data.date_added}</span>
                <h3 className="title">
                    <Link
                        to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}
                    >
                        {data.title}
                    </Link>
                </h3>
            </div>
        </div>
    );
};

BlogMainCard.propTypes = {
    data: PropTypes.object,
    classOption: PropTypes.string,
};

BlogMainCard.defaultProps = {
    classOption: "thumb",
};

export default BlogMainCard;
