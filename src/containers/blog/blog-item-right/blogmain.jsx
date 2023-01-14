import React from "react";
import PropTypes from "prop-types";
import BlogGrid from "../../../components/blog";
import BlogMainCard from "../../../components/blog/blogmain";

const BlogMainContainer = ({ data }) => {
    return (
        <section className="blog-section section-py">
            <div className="container">
                <div className="row mb-n7">
                    {data &&
                        data.map((single, key) => {
                            return (
                                <div
                                    key={key}
                                    className="col-lg-4 col-sm-6 mb-7"
                                >
                                    <BlogMainCard
                                        classOption="p-0"
                                        key={key}
                                        data={single}
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
};

BlogMainContainer.propTypes = {
    data: PropTypes.array,
};

export default BlogMainContainer;
